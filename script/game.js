class Blocky{//TBA

    constructor()
    {        
        this.lvlSpeed = 60;
        this.score = 0;
        this.lvlScore = 0;
        this.plrStart = 80;
        this.gameTimer = new Timer(0);
        this.gameMode = C.GAMEMODE.TITLE;
        this.level = 0;
        this.offset;
        this.gameObjects = new ObjectPool();
        this.particles = new ObjectPool(); 
        this.iT = {p:new Vector2(240, 400), src:'ip', sz:0.1, r:0, yv:0, svv:0, yvv:0, lv:0};
        this.rnd = 0;
        // Gravity
        this.mGravity = new Vector2(0, 100);
        this.help = {up:1,mv:1,f:1,pu:2, go:0, ln:3, c:null};
        this.super = 0;
        this.Start(0);
    }

    CreateMapRows(map,w,s,e,t){
        for (let r=s; r<e; r++){
            var a = new Array(w); 
            for (let i=0; i<w; i++) a[i] = t;
            map.push(a);
        }
    }
    CreateMap(w, h){
        var map = [];   
        this.CreateMapRows(map,w,0,12,0);
        this.CreateMapRows(map,w,12,h,1);
        return map;
    }

    TitleLevel(map, lvl, l, w, h){
        var y = h+l;
        var f = FEATURE[0];
        var t = f.t;
        var n = f.n[0];
        var x=this.Section(map, lvl, y, 0, t, h, n,0);
        
        return x;
    }

    Start(lvl){
        var lvls = [
            {cs:50, cr:2, w:80, f:0, t:[0,0,0]},//title
            {cs:60, cr:2, w:120, f:0, t:[0,0,1]},
            {cs:70, cr:1.8, w:140, f:5, t:[0,1,2]},
            {cs:80, cr:1.6, w:180, f:7, t:[1,0,2]},
            {cs:80, cr:1.4, w:100, f:9, t:[1,1,2]},
            {cs:80, cr:1.3, w:220, f:9, t:[0,0,2]},
            {cs:80, cr:1.2, w:220, f:9, t:[1,0,2]},
            {cs:80, cr:1.2, w:220, f:9, t:[1,2,2]},
            {cs:80, cr:1.2, w:220, f:9, t:[2,2,2]}
        ];

        var lvlInfo = lvl > lvls.length ? lvls[lvls.length-1] : lvls[lvl];
        this.gameTimer = new Timer(2);
        this.gameObjects.Clear();
        
        var mapData = this.CreateMap(lvlInfo.w, MAP.planSize.y);
        var levelData = [];
        this.CreateMapRows(levelData,lvlInfo.w,0,MAP.planSize.y,0)

        if(lvl==0){
            var x = this.TitleLevel(mapData, levelData, -6, lvlInfo.w, MAP.planSize.y);
        }       
         else{
            this.CreateLevel(mapData, levelData, -6, lvlInfo, MAP.planSize.y);            
        }

        MAP.Init(true, mapData, levelData, lvlInfo.w);

        var blocks = Util.UnpackWorldObjects(levelData);

        for (var i = 0; i < blocks.length; i++) 
        {
            var b = blocks[i];
            var w = b.w*32;
            var s = new StaticBody(b, 9, 
                new Vector2((b.x*32)+w/2, (b.y*32)+16), w, 32, 0, 0.2, .2, b.d); 
            this.gameObjects.Add(s);
        }
        var ht = lvl ? this.plr.damage : 500;
        var sht = lvl ? this.plr.shots : 0;
        this.plr = new Player( Input,
            new Vector2(this.plrStart, (MAP.planSize.y-7)*32), 32, 32, 2, 0, 0);
        this.gameObjects.Add(this.plr);
        this.plr.enabled = 0;
        this.plr.damage = ht;
        this.plr.extra = ht>=450;
        this.plr.shots = sht;
        this.plr.hat = 1;
        this.chaser = new Chaser(0, MAP.mapSize.x - 200, lvlInfo.cs, lvlInfo.cr);
        this.gameObjects.Add(this.chaser);

        this.gameMode = C.GAMEMODE.GAME;
        this.plr.enabled = 1;

        if(!lvl){
            this.gameMode = C.GAMEMODE.TITLE;
            this.score = 0;    
            this.plr.enabled = 0;
        }
        
        this.level = lvl;
        this.lvlScore = 0;
        MAP.scale = 1;
        
        this.boss = null;

        this.rnd = Util.RndI(0,2);

        if(this.level){
            MUSIC.Play();
        }
        else{
            MUSIC.Stop();
        }
    } 

    CreateLevel(map, lvl, l, info, h){
        var w = info.w;
        var y = h+l;
        var t = [1];
        var stage = 0;
        var fMax = 32;
        var fcMax = 12;
        var boss = w-14;
        var x = this.Section(map, lvl, y, 0, t, h, 8,stage);
        var fc = 0;
        var n, ys;
        var o = 0;
        var l2 = null;

        do{
            stage = info.t[x/((w/3)+1)|0];
            if(info.f && x < boss && fc>fcMax){
                fc = 0;
                var f = FEATURE[Util.RndI(1,info.f+1)];
                t = f.t;
                n = Util.RndI(f.n[0], f.n[1]);
                o = f.o;
                if(l2==null && f.l2){
                    l2 = {t:[Util.OneOf([1,2])], 
                        y: y+f.l2.y, 
                        x: x+f.l2.x, 
                        n:Util.RndI(3, 6),
                        m:0};
                }
            }
            else{
                var bl = x>boss;
                var ch = bl ? [1] : [0,1,2];
                var b = t[t.length-1];
                b = (b==0 || b == 2)
                    ? 1
                    : Util.OneOf(ch); //gap plat brk 

                n = Util.RndI(b==0 ? 1 : 2, b==0 ? (bl?3:4) : 6);
                ys = b==0 ? 0 : Util.RndI(-1,2);
                if(y+ys < h && (l2 == null || l2.y-y>4)){
                    y+=ys;
                }

                o = 0;
                t=[b];
            }

            if(x+n > w){
                n = w-x;
            }

            if(o){
                var nf = t.length *32;
                for (let j=0; j<n; j++){
                    for (let k=0; k<o.length; k++){
                        for (let i=0; i<o[k].p.length; i++){
                            var d = BlockFactory.Create(o[k].t, 
                                new Vector2((x*32) + (j*nf) + 16 + o[k].p[i].x, 
                                            (y*32) + 16 + o[k].p[i].y));
                            this.gameObjects.Add(d);
                        }
                    }
                }
            }

            x = this.Section(map, lvl, y, x, t, h, n,stage);

            if(l2){
                if(l2.x+l2.n > w){
                    l2.n = w-l2.x;
                }

                l2.x = this.Section(map, lvl, l2.y, l2.x, l2.t, 0, l2.n, stage);
                l2.m+=l2.n;
                
                ys=Util.RndI(-1,2);

                if(y-(l2.y+ys) > 4 && y-(l2.y+ys) < 10)
                {
                    l2.y+=ys;
                }

                l2.t=[Util.OneOf([0,1,2])];
                if(l2.m > fMax){
                    l2=null;
                }
            }
            
            fc += n;
        }while(x < w);

        this.gameObjects.Add(
            new StaticBody([],5, 
                new Vector2((w*32)+16, (h*32)/2), 32, h*32, 0, 0.2, .2)
            );
    }

    Section(map, lvl, y, x, tt, h, n, stg){
        var stgt = [7,23,22];
        var stga = [7,25,24];
        for (var r=0; r<n; r++)
        {         
            for (var rr=0; rr<tt.length; rr++)
            {                  
                var f=tt[rr];
                var t = f;
                if(f==2){
                    if(r==0){ 
                        t=8;
                    }
                    else if(r==n-1){
                        t=10;
                    }
                    else{
                        t=9;
                    }
                }
                else if (f==1){
                    t = stgt[stg];
                    if(Util.OneIn(6)){
                        t=stga[stg];
                    }
                }

                lvl[y][x] = t;

                for (var c=y+(f==1?0:1); c<h; c++){ 
                    if(t)
                    map[c][x] = 2;
                }
                x++;
            }
        }
        return x;
    }

    PlatformBreak(t){
        for (var i = 0; i < t.t.length; i++) {
            var c = t.t[i];
            var r = t.y;

            var pt = new Vector2(c * MAP.tileSize, r * MAP.tileSize); 
            var d = BlockFactory.Create(Util.OneOf([12,11]), pt);
            this.gameObjects.Add(d); 

            GAME.ParticleGen(pt, {t:[0,1,2],col:[6,8,9]});
        }
    }

    Launch(p, V, id){
        var d = BlockFactory.Create(id, p);
        d.V = V; 
        d.v = Util.Rnd(1)-0.5;
        this.gameObjects.Add(d);
        return d;
    }

    AddObject(id, tp, p, V,s=1){
        var d = new Shot(id, tp, p);
        d.V = V;    
        d.v = Util.Rnd(1)-0.5;
        d.size = s;
        this.gameObjects.Add(d);
    }

    ParticleGen(pos, pt, s=4)
    {
        var n = pt.n || Util.RndI(3,6);

        var cols = [];
        var tp = pt ? pt.t : 0;
        pt.col.forEach(c => {
            cols.push(DEFS.spritePal[c]);
        });

        var ln = cols.length;
        var bods = [
            [-2,2, -2,-2, 2,-2, 2,2],
            [-12,-4, 12,-4, -8,4],
            [-14,-1, 0,-4, 12,0, -10,4],
            [0,-16, 16,16, -16,16]
        ];

        for (var i = 0; i < n; i++) {
            var b = this.particles.Is(0);

            if(!b){
                b = new Particle(pos.Clone());
                this.particles.Add(b);
            }
            var l = Util.RndI(1,ln);
            var lb = 0;
            b.pos = pos.Clone();

            b.body = [
                [0,bods[Util.OneOf(tp)]]
            ];
            b.enabled = 1;
            b.op = 1;
            b.rgb = cols[l] instanceof Object ? cols[l] : new Color(cols[l]);
            b.bRgb = cols[lb] instanceof Object ? cols[lb] : new Color(cols[lb]);

            var sp = s + (((i/4)|0)*s);
            b.speed = Util.RndI(sp, sp+s);
            b.dir = new Vector2(Util.Rnd(2)-1, Util.Rnd(2)-1);
        }
    }
    

    IsLeftBehind(x){
        return x < MAP.Pos.l-64;
    }

    NextLevel(){
        this.score += this.lvlScore;        
        if(this.level == 8){
            this.gameMode = C.GAMEMODE.KING;
            this.gameTimer = new Timer(8);
        }
        else{
            this.level ++;
            this.Start(this.level);
        }
    }

    LevelEnd(){
        this.gameMode = C.GAMEMODE.LEVELEND;
        this.gameTimer = new Timer(8);
    }
    GameOver(){
        if(this.super){
            this.LevelEnd();
        }
        else{
            this.gameMode = C.GAMEMODE.GAMEOVER;
            this.gameTimer = new Timer(8);
        }
    }
    Quit(){
        this.gameMode = C.GAMEMODE.TITLE;
        this.plr.enabled = 0;
        this.Start(0);
    }

    Zoom(t){
        if(t){
            MAP.Zoom(0.002);
        }
        else if(MAP.scale > 1){
            MAP.Zoom(-0.002);
        } 
    }

    Update(dt)
    {   
        this.gameTimer.Update(dt);
        if(this.help.c){
            this.help.c.Update(dt);
        }

        this.offset = MAP.ScrollTo(new Vector2(
            this.plr.C.x > this.chaser.pos.x ? this.plr.C.x : this.chaser.pos.x, 
            this.plr.C.y));

        if(this.gameMode == C.GAMEMODE.TITLE){
            if(Input.Fire1()){
                this.iT = {p:new Vector2(240, 400), src:'ip', sz:1, r:0,lv:1};
                this.Start(1);
            }
            if(this.iT.lv == 0){
                if(this.iT.sz < 16){
                    this.iT.svv += 0.38;
                    this.iT.yvv += 1.8;
                    this.iT.sz += EasingFunctions.easeInQuad(this.iT.svv*dt);
                    this.iT.r += 14.5*dt;

                    this.iT.p.y-= EasingFunctions.easeInOutQuad(this.iT.yvv*dt);
                    if(this.iT.sz>=16){
                        AUDIO.Play(C.SND.crash);
                    }                
                }
                else if (this.iT.p.y<990){
                    this.iT.yv += 0.1;
                    this.iT.p.y += EasingFunctions.easeInQuad(this.iT.yv*dt);
                }                
            }

        }else if(this.gameMode == C.GAMEMODE.GAME 
            || this.gameMode == C.GAMEMODE.GAMEOVER
            || this.gameMode == C.GAMEMODE.LEVELEND
            || this.gameMode == C.GAMEMODE.KING){

            this.help.go = this.level ==1 && this.chaser.pos.x > 400 && this.chaser.pos.x < 600;

            if(GAME.help.c != null && this.plr.shots){
                GAME.help.c.enabled = 0;
            }
            //behold the spell of invincibility
            if(Input.IsSingle("i") && Input.IsSingle("q")){
                this.super = !this.super;
            }  

            if(this.boss){
                this.Zoom(this.plr.C.Distance(this.boss.C) > 400);
            }
            else{
                this.Zoom(this.plr.C.x < (this.chaser.pos.x-340));              
            }

            if(this.plr.C.x > MAP.mapSize.x - 800 && this.boss == null){
                this.boss = new BadGuy(new Vector2(MAP.mapSize.x - 200, 100), 21, 11);
                this.gameObjects.Add(this.boss);
                this.boss.Set(100);
                this.chaser.rate *=0.8;                
            }

            var objects = this.gameObjects.Get();

            // Compute collisions
            var p = this.gameObjects.Get([0],1);
          
            var clx = PHYSICS.Update(p, dt);

            for (var i = 0; i < objects.length; i++) {
                var ci = clx.filter(c=>c.P1 == objects[i] || c.P2 == objects[i]);
                objects[i].Update(dt, ci);
            }

            if(this.gameMode == C.GAMEMODE.LEVELEND){
                //fireworks
                if(this.plr.enabled){
                    if(Util.OneIn(32)){
                        var p = new Vector2(Util.RndI(MAP.Pos.l+100, MAP.Pos.r-100),
                                Util.RndI(this.plr.C.y-200, this.plr.C.y-400));
                        
                        this.ParticleGen(p, {t:[3],col:[5,27,12,18]}, 16);
                    }
                }

                if(this.gameTimer.enabled){
                    if(this.gameTimer.Value < 5 && Input.Fire1()){
                        this.NextLevel();
                    }
                }  

                if(!this.gameTimer.enabled){
                    this.NextLevel();
                }        
            }
            else if(this.gameMode == C.GAMEMODE.KING){
                if(Util.OneIn(32)){
                    var p = new Vector2(Util.RndI(MAP.Pos.l+100, MAP.Pos.r-100),
                            Util.RndI(this.plr.C.y-200, this.plr.C.y-400));
                    
                    this.ParticleGen(p, {t:[3],col:[5,27,12,18]}, 16);
                }

                if(!this.gameTimer.enabled){
                    this.Quit();
                } 
            }
            else{
                if(this.boss && (this.plr.hat == 2 || !this.boss.enabled && !this.boss.hatP.enabled) )
                {
                    this.LevelEnd();
                }                
            }

            var p = this.particles.Get();

            for (var i = 0; i < p.length; i++) {
                p[i].Update(dt);
            }

            var ps = ((this.plr.C.x - this.plrStart)/10)|0;
            this.lvlScore = ps > this.lvlScore ? ps : this.lvlScore;          

            if(this.gameMode == C.GAMEMODE.GAME && !this.plr.enabled){
                this.GameOver();
            }
            if(this.gameMode == C.GAMEMODE.GAMEOVER || this.gameMode == C.GAMEMODE.KING){
                if(!this.gameTimer.enabled){
                    this.Quit();
                }            
            }
        }
    }

    Render()
    {
        MAP.PreRender();

        //render objects
        var objects = this.gameObjects.Get();
        for (var i = 0; i < objects.length; i++) {
            objects[i].Render(this.offset.x, this.offset.y);            
        }

        var p = this.particles.Get();
        for (var i = 0; i < p.length; i++) {
            p[i].Render(this.offset.x, this.offset.y);
        }

        MAP.PostRender();

        if(this.gameMode != C.GAMEMODE.TITLE){
            SFX.Text("DISTANCE: " + Util.NumericText(this.score+this.lvlScore,5),16, 4, 3, 0, "#fff");
            SFX.Text("TONY" ,234, 4, 3, 0, this.super ? "#f00" : "#fff"); 
            SFX.Box(298,4,
                Util.Remap(0,500, 0,100, this.plr.damage)
                , 15, '#0F0');

            SFX.Text("ROCKS: " + Util.NumericText(this.plr.shots,3),
                            234, 24, 3, 0, "#fff"); 
        }

        var b = BOSSES[this.level]; 

        var g = "#82b";
        var d = "#719";
        if(this.gameMode == C.GAMEMODE.GAME)
        {           
            if(this.gameTimer.enabled){
                SFX.Text(b[0],200,140,6,0,g);
            }
            else{
                if(this.help.go){
                    SFX.Text("GO",320,120,12,1,d);
                    SFX.Text(">",520,120,12,0,d); 
                }
                
                if(this.help.mv){
                    SFX.Text("RUN      [A D  LEFT RIGHT]",360,260,4,0,d);
                }                
                else if(this.help.up){
                    SFX.Text("JUMP     [W    UP]",360,260,4,0,d);
                }
                else if(this.help.ln){
                    SFX.Text("AVOID",360,260,4,0,d);
                } 
                else if(!this.plr.shots && this.help.c && this.help.c.enabled){                        
                    SFX.Text("COLLECT ROCKS",360,260,4,0,d);
                }                 
                else if(this.plr.shots && this.help.f){
                    SFX.Text("THROW     [SPACE]",360,260,4,0,d);
                }                     
                
            }

            if(this.boss){
                SFX.Text(b[0]+" "+b[1], 520, 4, 3, 0, "#fff");  
                SFX.Box(402,4,
                    Util.Remap(0,this.boss.max, 0,100, this.boss.damage)
                    ,15, '#F00'); 

                if(this.boss.hatP){
                    SFX.Text("GET CROWN", 120, 140, 4, 0, d); 
                }
            }
        }
        else if(this.gameMode == C.GAMEMODE.TITLE){
            SFX.Sprite(this.iT.p.x, this.iT.p.y, 
                SPRITES.Get(this.iT.src, 0), this.iT.sz, this.iT.r);

            // var pt = this.iT.p.CloneAdd({x:0,y:10});
            // pt.rotate(this.iT.p, this.plr.G);
            // SFX.Sprite(pt.x, pt.y, 
            //      SPRITES.Get('legs', 0), this.iT.sz, this.iT.r);    

            SFX.Text("GO FORTH",300,100,8,1,g); 
            SFX.Text("AND",400,160,6,1,g); 
            SFX.Text("CONQUER",310,212,8,1,g); 
            if(this.iT.lv || this.iT.sz > 16){ 
                SFX.Text("[SPACE] TO START",360,280,4,0,d);  
            }
        }else if(this.gameMode == C.GAMEMODE.LEVELEND){            
            SFX.Text(""+ b[2] + " " + b[1] + " IS " + (this.rnd==0?"SLAIN":"DEFEATED") ,60,100,5,1,g); 
            SFX.Text("YOU ARE NOW " + b[2],180,140,5,1,g); 
            SFX.Text("YOU HAVE TRAVELLED " + (this.score+this.lvlScore) +" YDS" ,140,190,4,1,g); 
            SFX.Text("ONWARD " + b[2]+" TONY" ,190,230,5,1,g); 
        
        }else if(this.gameMode == C.GAMEMODE.GAMEOVER){
            SFX.Text("THY GAME IS OVER",140,100,6,1,g);   

            SFX.Text("YOU HAVE TRAVELLED " + (this.score+this.lvlScore) +" YDS" ,130,200,4,1,d); 
            if(this.level>1)
            {
                SFX.Text("YOU HAVE CONQUERED " + (this.level-1) + " KINGDOMS",100,240,4,1,d); 
                SFX.Text(""+BOSSES[this.level-1][2]+" OF THE REALM",170,145,5,1,g); 
            }
        }
        else if (this.gameMode == C.GAMEMODE.KING){
            SFX.Text("BEHOLD KING TONY",140,100,6,1,g);  
        }
    }
}