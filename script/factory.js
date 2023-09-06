// NONE:0,
// BALL:1,
// BLOCK:3,
// WALL:5,
// GROUND:6,
// PLAYER:7,
// EXTRA:8,
// PLATFORM:9,
// BADGUY:10,
// BOSS:11,
// PICKUPSHOT:12,
// PICKUPHAT:13
var C = { 
    G:
    {
        TITLE:0,
        GAME:1,
        INPLAY:2,
        LEVELENDING:3,
        LEVELEND:4,
        GAMEWON:5,
        GAMEOVER:6,
        KING:7,
        INTRO:8
    },
    SND:{
        step:0,
        crash:1,
        splinter:2,
        tada:3,
        boss:4
    }
}

var D=["[SPACE]"]
var BOSSES = [
    [0,0,"KNIGHT"],
    ["KINGDOM OF ASMEA","INGELRAMNUS","LORD"],
    ["EFRIUM","ATHEENA","BARON"],
    ["STRONGHOLD OF BULWARK", "ANDROU","VISCOUNT"],  
    ["KAIDIAN KINGDOM","GIROLDUS","COUNT"],      
    ["KINGDOM OF ECANUS","ERNALD","MARQUIS"],
    ["VINLUN","GUILIELM","DUKE"],
    ["CHAMBERLAINS MOUND","GUERNIER","PRINCE"],
    ["DEEPWALD","IMAYN","KING"]
];
var DEFS = {
    spritePal:[
        "#FAF",
        "#000",
        "#666",
        "#888",
        "#AAA",
        "#FFF",
        "#842",
        "#952",
        "#B52",
        "#D83",
        "#E94",
        "#5BE",
        "#7CF",
        "#9DF",
        "#F22",
        "#44F",
        "#485",
        "#3C3",
        "#0D0",
        "#A9A",
        "#868",
        "#646",
        "#77D",
        "#469",
        "#046",
        "#FD0",
        "#EBA",
        "#333",
        "#F83"//28
	],
    spriteDef: {
        'ip':{tag:'spX',src:[{x:0,y:24}],w:32,h:32},                          // 'ip'
        'p':{tag:'s16x2',src:[{x:128,y:0}],w:32,h:32},                        // 'player'
        'h':{tag:'s16x2',src:[{x:256,y:0}],w:32,h:20},                        // 'hat'
        'h2':{tag:'s16x2',src:[{x:288,y:0}],w:32,h:20},                       // 'hat2'
        'h3':{tag:'s16x2',src:[{x:294,y:24}],w:18,h:8},                       // 'hat3'
        'k':{tag:'s16x2',src:[{x:256,y:20}],w:32,h:12},                       // 'crown'
        'g':{tag:'s16x2',src:[{x:160,y:0}],w:32,h:32},                        // 'badguy'
        'g2':{tag:'s16x2',src:[{x:192,y:0}],w:32,h:32},                       // 'badguy2'
        'l':{tag:'s16x2',src:[{x:224,y:0},{x:224,y:12}],w:32,h:12},           // 'legs'
        'b':{tag:'s24x4',src:[{x:0,y:0}, {x:0,y:0}],w:96,h:96},               // 'boss'
        'f':{tag:'s24x4',src:[{x:96,y:0}, {x:144,y:0}],w:48,h:28},            // 'bossfc'
        'r':{tag:'s24x4',src:[{x:96,y:32}],w:40,h:60},                        // 'bossarm'
        'bk':{tag:'s8x4',src:[{x:0,y:0},{x:32,y:0}],w:32,h:32},               // 'block32'
        'bc':{tag:'s8x4',src:[{x:64,y:0},{x:80,y:0}],w:32,h:32},              // 'ice32'
        't1':{tag:'s8x4',src:[{x:256,y:0}],w:32,h:32},                        // 'gr1_32'
        't2':{tag:'s8x4',src:[{x:288,y:0}],w:32,h:32},                        // 'gr2_32'
        't3':{tag:'s8x4',src:[{x:320,y:0}],w:32,h:32},                        // 'gr2b_32'
        't4':{tag:'s8x4',src:[{x:352,y:0}],w:32,h:32},                        // 'gr3_32'
        't5':{tag:'s8x4',src:[{x:384,y:0}],w:32,h:32},                        // 'gr3b_32'
        't6':{tag:'s8x2',src:[{x:64,y:0},{x:64,y:0}],w:16,h:16},              // 'log16l'
        't7':{tag:'s8x2',src:[{x:80,y:0},{x:80,y:0}],w:16,h:16},              // 'log16'
        't8':{tag:'s8x2',src:[{x:96,y:0},{x:96,y:0}],w:16,h:16},              // 'log16r'
        't9':{tag:'s8x4',src:[{x:128,y:0}],w:32,h:32},                        // 'log32l'
        'ta':{tag:'s8x4',src:[{x:160,y:0}],w:32,h:32},                        // 'log32'
        'tb':{tag:'s8x4',src:[{x:192,y:0}],w:32,h:32},	                      // 'log32r'
        'tc':{tag:'s8x4',src:[{x:224,y:0},{x:224,y:0}],w:32,h:16},            // 'shard1'
        'td':{tag:'s8x4',src:[{x:224,y:16},{x:224,y:16}],w:32,h:16},          // 'shard2'
        'te':{tag:'s16x1',src:[{x:0,y:0},{x:16,y:0}],w:16,h:16},              // 'rock16'
        'tf':{tag:'s16x2',src:[{x:0,y:0},{x:32,y:0}],w:32,h:32},              // 'rock32'
        'tg':{tag:'s16x4',src:[{x:0,y:0},{x:64,y:0}],w:64,h:64},              // 'rock64'
        'th':{tag:'s16x2',src:[{x:64,y:0},{x:96,y:0}],w:32,h:32},             // 'crate32'
        'ti':{tag:'spX',src:[{x:0,y:0},{x:0,y:0}],w:160,h:16},                // 'log10'
        },
    spriteData: [
        [104,8,"0|2,6|0,2|2,6|0,2|11,6|0,2|11,6|0,2|7,22|0,2|8,3|0,4|18,8|19,4|20|0,4|19,3|20|0,3|17,5|22|17,3|22|17,6|2|4,6|2,2|4|2|4,3|2,2|11|12,2|13,2|12|13|11|0,3|11|13|11|0,2|7|10,5|8,2|10,6|8,2|10,7|7|0|8|10|7|8,4|17,8|19|20,4|21|19,3|20,4|21|19,2|23,3|17|22|23,6|17|22|23,3|2|4,6|2,2|4,3|2,2|4|2|11|12,2|13,2|12|13|11,3|12|13,2|12|11,2|7|10|9|8,3|9,6|8,2|9,6|8,2|9|7|8|7|9,4|7|8|17,8|19|20,4|21|20,2|19|20,4|21|20,2|23,3|24|22|23,5|17|24|22|23,3|2|4,5|3|2,2|4|2|4,2|2,3|11|12,2|13,2|12|13|11,2|12,2|13,2|12|13|11|7|8,2|9,5|8,3|9,5|10|8,3|9,3|7|8,8|16,8|19|20,4|21|20,2|19|20,4|21|20,2|24|17,2|24|17,2|24,2|17,3|24|17,2|24,2|2|4,4|3,2|2,4|4,2|3,2|2|11|12|13,3|12|13|11|0,2|12|13,2|12|13|11|7|9|10,2|9|8,3|9,5|8,4|9,4|8,2|7|0,5|8,2|0|7,2|16|7,3|16|7|20|21,7|20|21,7|22,5|17|22|23|22,2|17|22,2|23|22|23|2|4|3|4|3,3|2,2|4|3|2|3|2|3|2|11|12|13,2|12|13,2|11,3|13|11|12|13,2|11|7|9,2|8,2|9,5|8,3|9,5|8,3|9,2|7|0,2|8,3|10,2|8|7,8|21|19|20,6|19|21|20,2|21|19|20,2|22|23,4|17|23|24|22|23|17|23,2|24|23|24|2|3,6|2,2|3,4|2|3|2|11|13,3|12|13|12|11,2|13|11|0|11|13|12|11|7|8,2|9,4|8,3|9,3|10,2|9|8,2|9,5|7|8,2|9,2|7,2|9|8|6,8|19|20,6|21|19|20|21|0|19|20,2|21|22|23,3|17|23|17|24|22|24,7|0|2,6|0,2|2,6|0,2|11,6|0,2|11,2|0|11,3|0,2|7,22|0|8,8|6,8|21,7|20|21,2|0,3|21,2|20|23|24,7|0,8"],
        [160,16,"0,8|2,3|0,13|2,3|0,5|8,19|7,2|8,11|0|1,14|0,2|1,14|0,2|1,14|0,5|1|0,4|1|0,7|1,14|0,2|1,14|0,5|2,4|4,3|2|0,8|2,4|4,3|2|0,4|8|10,7|9,7|8,2|10,4|7,2|10|9,6|7|8|1,2|26,12|1,4|26,12|1,4|8,12|1,2|0,4|1|0,4|1|0,6|1,2|3|4,3|3,8|1,3|27|2,3|27,9|2|1|0,3|2|4,8|2|0,6|2|4,8|2|0,3|8|10|9,13|8,2|10|9,10|7,2|9|8|1|26,14|1,2|26,14|1,2|8,14|1|0,4|1|0,4|1|0,6|1|3|4,2|3,2|2|3,2|2|3,2|2|3,2|1,2|2,2|27,12|1|0,2|2|4,10|2|0,4|2,5|4,3|2,4|0,3|8,14|0,2|8,14|0|1|26,14|1,2|26,14|1,2|8,14|1|0,5|1|0,2|1|0,7|1|3,5|2|3,2|2|3,2|2|3,2|1,2|2|27,2|1,8|27,3|1|0,2|2|4,9|3,2|2|0,3|2|4,2|2|4,2|2,2|4,2|3,2|2|0,2|8|10,3|8|10,2|9,2|8|10,2|9|8|0,2|7,2|10,2|8|10,2|9,2|8|10,2|9|8|0|1|26,14|1,2|26,14|1,2|8,14|1,4|0,2|1,12|3,2|1,14|27,2|1|0|27|1|0,2|27|1|0|1|27,2|1|0|2|4,9|3,4|2|0|2|4,3|2|4,2|2|4,2|3,4|2|0|8|10|9,2|8|10|9,3|8|10|9,2|8|0,4|7,4|9,3|8|10|9|7,2|0|1|26,6|1,2|26,2|1,2|26,2|1,2|26,3|1,2|26,4|1,2|26,3|1,2|8,4|1,2|8,2|1,2|8,4|1|0,2|1,4|0,4|1,4|0,2|1|3,2|1|0,12|1|27,2|1|0|27|1|0,2|27|1|0|1|27,2|1|2|4,9|3,5|2,2|4,9|3,5|2|0|8|10|9,2|8|10|9,3|8|9,3|8|0,2|7,3|9|7,2|9,3|8|9|7|0,3|1|26,6|1,2|26,2|1,2|26,2|1,2|26,14|1,2|8,14|1|0,6|1|0,4|1|0,4|1|3,2|1|0,12|1|27,2|1|0|27|1|0,2|27|1|0|1|27,2|1|2|4,9|3,5|2,2|4,9|3,3|2|3|2|0|8|9,3|8|9,4|8|9,3|8|0,2|8|9,3|8|9,4|8|9,2|7,2|0|1|26,14|1,2|26,14|1,2|8,14|1|0,6|1|0,4|1|0,4|1|3,2|1,14|27,2|1,2|27|1,3|27|1,3|27,2|1|2|4,8|3,5|2|0|2|4,4|2,2|4,2|3,4|2,2|0,2|8|9,3|8|9,4|8|9,3|8|0,2|8|9,3|8|9,4|8|9,3|8|0|1,48|0,6|1|0,4|1|0,4|1|3,14|1,2|27,14|1|0|2|3|4,5|3,6|2|0,2|2,4|4,3|3,2|2|3,3|2|0,2|8|9,3|8|9,4|8|9,3|8|0,2|7,2|9,2|8|9,4|8|9,2|7|0,2|1|3,11|4,2|3|1,2|2,3|27,11|1,2|2,3|27,11|1|0,7|1|0,2|1|0,5|1,32|0|2|3,12|2|0,2|2|3,9|2,4|0,2|8|9,3|8|9,4|8|9,3|8|0,4|7,2|8|9,4|8|9,3|7|0|1|3,4|4,2|3,6|4,2|1,2|2|27,9|2,3|27|1,2|2|27,9|2,3|27|1,5|0,2|1,10|25|0,4|25|0,4|25|0,4|25|0,18|2|3,11|2|0,3|2|3,3|2|3,7|2|0,2|8|9,3|8|9,4|8|9,3|8|0,2|7,2|9,2|8|9,4|8|9,3|8|0|1|3,14|1,2|2|27,13|1,2|27,14|1|0,3|1,4|0,2|1,4|0,3|25,2|0,2|25,3|0,2|25,3|0,2|25,2|0,18|2|3,10|2|0,4|2|3|2,3|3,3|2|3,2|2|0,3|8,14|0,2|8,8|7,6|0|1|3,14|1,2|27,10|2,2|27,2|1,2|27,9|2,2|27,3|1|0,16|25,3|0|25,3|0,2|25,3|0|25,3|0,5|1,5|0,9|2|3,8|2|0,6|2,2|3,5|2|3|2|0,3|8|10,7|9,7|8,2|10,7|9,7|8|1|3,14|1,2|27,14|1,2|27,14|1|0,16|25,16|0,5|1,5|0,10|2,2|3,5|2|0,8|2,2|3,5|2|0,4|8,2|9,13|8,3|9,3|7,3|9,7|8|0,3|3,3|0,13|27,3|0,13|27,3|0,26|25,16|0,5|1,5|0,12|2,5|0,11|2,5|0,5|8,19|7,3|8,10|0,64|25,16|0,3|1,9|0,4"],
        [48,24,"0,2|1,20|0,3|1,3|0,4|1,3|0,3|1|0,6|1|0,3|1|28,20|1|0|1,2|5,2|1|0,2|1,2|5,2|1,6|0,2|1,6|28,22|1|0|1,3|0,4|1,3|0,3|1|0,6|1|0,2|1|26|28,2|26,9|28,2|26,3|28,2|26,3|1|0,24|1|26,22|1|0,4|1,5|0,15|1|26,22|1|0,3|1|5,5|1|0,6|1,5|0,3|1|26,22|1|0,4|1,5|0,6|1,2|0,3|1,2|0,2|1|6|26,6|6,7|26,7|6|1|0,2|1,4|0,18|1|6,2|26,4|6,2|26,5|6,3|26,4|6,2|1|0|1|26,4|1|0,17|1|6,7|26,7|6,8|1,2|26,6|1|0,16|1|6,8|26,5|6,9|1,2|26,6|1|0,16|1|6,22|1,9|0,16|1,25|8,6|1|0,16|1|8,22|1,2|8,6|1|0,16|1|8,22|1,2|8,6|1|0,16|1|8,22|1,2|8,6|1|0,16|1|9|8,20|7|1,2|8,7|1|0,15|1|9|8,20|7|1,2|8,7|1,2|0,14|1|9,2|8,17|7,3|1|0|1|8,7|1|0,14|1|9,2|8,8|9,3|8,5|7,3|1,2|0,2|1|8,6|1|0,15|1|9|8,7|1,3|9|8,6|7|1|0,5|1|8,6|0,15|1,4|8,4|1|0,3|1|9,2|1|8,2|7,2|1|0,6|1,2|8,3|0,16|1,7|8|1|0,3|1,8|0,28|1,8|0,4|1,8|0,27"]
    ]
}


var FEATURE =[
    {t:[1],n:[36,36]},          
    {t:[1,0,0],n:[2,5]},        //large gap SS
    {t:[1,0],n:[3,6]},          //SS    
    {t:[1,1],n:[1,2],           //2x pmid
        o:[{
            t:4,
            p:[{x:0,y:-32},{x:32,y:-32},{x:16,y:-64}]
        }]
    },
    {t:[1],n:[1,2],                     //crate tower
        o:[{
            t:6,
            p:[{x:0,y:-32},{x:0,y:-64},{x:0,y:-96},{x:0,y:-128}]
        }]
    }, 
    {t:[1,1],n:[1,2],                     //ice tower
        o:[{
            t:5,
            p:[{x:0,y:-32},{x:32,y:-32},{x:32,y:-64},{x:32,y:-96}]
        }]
    },      
    {t:[1,1,1],n:[1,2], l2:{x:4,y:-5},      //3x pmid l2
        o:[{
            t:4,
            p:[{x:0,y:-32},{x:32,y:-32},{x:64,y:-32},
                {x:16,y:-64},{x:48,y:-64},{x:32,y:-96}]
        }]
    }, 
    {t:[1,0,0,0,1,1,1],n:[1,2],         //gap with half log
        o:[{
            t:16,
            p:[{x:128,y:-16}]
        }]
    },
    {t:[0,0,1,0,0],n:[1,4],             //see saw SS
        o:[{
            t:4, p:[{x:64,y:-32}]
            },
            {
            t:16, p:[{x:64,y:-48}]
            }
        ]
    },
    {t:[1,1,1],n:[1,2], l2:{x:4,y:-5},      //log slope l2
        o:[{
            t:5,
            p:[ {x:32,y:-32},{x:32,y:-64},
                {x:64,y:-32},{x:64,y:-64}]
        },
        {
            t:16, p:[{x:-0,y:-90}]
        }]
    }
];

var GAMEOBJ = [
    {id:0,col:"#6DF"},{id:1,col:"#8bf"},{id:2,col:"#731"},
    {
        id:3, src:'p',
        s:0, t:3,
        w:32, h:32, d:2, f:0, r:0, dm:500
    },
    {
        id:4, src:'bk',
        s:0, t:3,
        w:32, h:32, d:16, f:0.2, r:0.2, dm:64, p:{t:[0,1,2],col:[2,3,4]}
    },
    {
        id:5, src:'bc',
        s:0, t:3,
        w:32, h:32, d:8, f:0.2, r:0.2, dm:26, p:{t:[0,1,2],col:[11,12,13]}
    },
    {
        id:6, src:'th',
        s:0, t:3,
        w:32, h:32, d:12, f:0.2, r:0.2, dm:24, p:{t:[0,1,2],col:[6,8,9]}
    },
    {
        id:7, pid:7,src:'t1',
        s:1, t:3,
        w:32, h:32, dm:0
    },
    {
        id:8, pid:9, src:'t9',
        s:1, t:3,
        w:32, h:32, dm:16
    },
    {
        id:9, pid:9,src:'ta',
        s:1, t:3,
        w:32, h:32, dm:16
    },
    {
        id:10, pid:9,src:'tb',
        s:1, t:3,
        w:32, h:32, dm:16
    },
    {
        id:11, src:'tc',
        s:0, t:3,
        w:32, h:16, d:8, f:0.2, r:0.2, dm:8,p:{t:[0],col:[6,8,9]}
    },
    {
        id:12, src:'td',
        s:0, t:3,
        w:32, h:16, d:8, f:0.2, r:0.2, dm:8,p:{t:[0],col:[6,8,9]}
    },
    {
        id:13, src:'tf',
        s:0, t:1,
        w:16, h:16, d:8, f:0.8, r:0.8, dm:64, p:{t:[0,1,2],col:[2,3,4]}
    },
    {
        id:14, src:'tg',
        s:0, t:1,
        w:32, h:32, d:8, f:0.8, r:0.8, dm:64, p:{t:[0,1,2],col:[2,3,4]}
    },
    {
        id:15, src:'te',
        s:0, t:1,
        w:8, h:8, d:4, f:0.8, r:0.8, dm:10, p:{t:[0],col:[2,3,4]}
    },
    {
        id:16, src:'ti',
        s:0, t:3,
        w:160, h:16, d:8, f:1, r:0.2, dm:20, p:{t:[0,1,2],col:[6,8,9]}
    },
    {
        id:17, src:'t6',
        s:0, t:3,
        w:16, h:16
    },
    {
        id:18, src:'t7',
        s:0, t:3,
        w:16, h:16
    },
    {
        id:19, src:'t8',
        s:0, t:3,
        w:16, h:16
    },
    {
        id:20, src:'g',
        s:0, t:3,
        w:32, h:32, d:2, f:0, r:0, dm:64
    },
    {
        id:21, src:'b',
        s:0, t:3,  
        w:96, h:96, d:1, f:0, r:0, dm:100
    },
    {
        id:22, pid:22,src:'t2',
        s:1, t:3,
        w:32, h:32, dm:0
    },
    {
        id:23, pid:23,src:'t4',
        s:1, t:3,
        w:32, h:32, dm:0
    },
    {
        id:24, pid:22,src:'t3',
        s:1, t:3,
        w:32, h:32, dm:0
    },
    {
        id:25, pid:23,src:'t5',
        s:1, t:3,
        w:32, h:32, dm:0
    },
    {
        id:26, src:'h',
        s:0, t:3,
        w:32, h:20, d:4, f:0.8, r:0.8, dm:0
    },
    {
        id:27, src:'th', //collectable
        s:0, t:3,
        w:32, h:32, d:12, f:0.2, r:0.2, dm:2, p:{t:[0,1,2],col:[6,8,9]}
    },
    {
        id:28, src:'te',
        s:0, t:1,
        w:8, h:8, d:4, f:1, r:1, dm:0
    },
    {
        id:29, src:'k',
        s:0, t:3,
        w:32, h:12, d:4, f:0.5, r:1, dm:0
    },
    {
        id:30, src:'th', //badguy
        s:0, t:3,
        w:32, h:32, d:12, f:0.2, r:0.2, dm:2, p:{t:[0,1,2],col:[6,8,9]}
    },
    {
        id:31, src:'g2',
        s:0, t:3,
        w:32, h:32, d:2, f:0, r:0, dm:64
    },
    {
        id:32, src:'h2',
        s:0, t:3,
        w:32, h:20, d:4, f:0.8, r:0.8, dm:0
    },
    {
        id:33, src:'h3',
        s:0, t:3,
        w:18, h:8, d:4, f:0.8, r:0.8, dm:0
    }
];

class BlockFactory
{
    static Create(id, p, r)
    {
        var obj = GAMEOBJ.find(o=>o.id == id);

        if(obj){   
            var b = null;

            if(obj.t==1){
                b =  new Circle(obj.t, obj.id, 
                    p, 
                    obj.w, obj.d, obj.f, obj.r, obj.dm, obj.p);
            }
            else{
                b = new Rectangle(obj.t, obj.id, 
                    p, 
                    obj.w, obj.h, 
                    obj.d, 
                    obj.f, 
                    obj.r, obj.dm, obj.p);  
            }
            return b;
        }
    }
}

var SOUNDS = [
    [1.03,,564,.01,,.01,,1.6,,,,,,,-30,,,.04,.01],//step
    [,,875,.02,.02,.31,1,2.92,-0.1,,,,,.5,,.5,.12,.34,.14],//crash        
    [.4,,989,.02,.25,.36,2,4.56,,.7,,,.17,1.3,,.3,,.33,.17,.47],//splinter
    [,,1629,.01,.06,.12,1,.18,,.6,-281,.08,,,,,,.73,.04,.15],//ta da
    [,.35,391.9954,.14,.05,.16,1,1.24,,-11.8,,-0.01,,,,,,,.01,.23]//boss
];

var FONT = {    
    'A': [
        [, 1, ],
        [1, , 1],
        [1, 1, 1],
        [1, , 1],
        [1, , 1]
    ],
    'B': [
        [1, 1,],
        [1, , 1],
        [1, 1, 1],
        [1, , 1],
        [1, 1,]
    ],
    'C': [
        [1, 1, 1],
        [1,,],
        [1,,],
        [1,,],
        [1, 1, 1]
    ],
    'D': [
        [1, 1,],
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, 1,]
    ],
    'E': [
        [1, 1, 1],
        [1,,],
        [1, 1, 1],
        [1,,],
        [1, 1, 1]
    ],
    'F': [
        [1, 1, 1],
        [1,,],
        [1, 1,1],
        [1,,],
        [1,,]
    ],
    'G': [
        [, 1, 1,],
        [1,,,],
        [1, , 1, 1],
        [1, , , 1],
        [, 1, 1,]
    ],
    'H': [
        [1, , 1],
        [1, , 1],
        [1, 1, 1],
        [1, , 1],
        [1, , 1]
    ],
    'I': [
        [1, 1, 1],
        [, 1,],
        [, 1,],
        [, 1,],
        [1, 1, 1]
    ],
    'J': [
        [1, 1, 1],
        [, , 1],
        [, , 1],
        [1, , 1],
        [1, 1, 1]
    ],
    'K': [
        [1, , , 1],
        [1, , 1,],
        [1, 1,,],
        [1, , 1,],
        [1, , , 1]
    ],
    'L': [
        [1,,],
        [1,,],
        [1,,],
        [1,,],
        [1, 1, 1]
    ],
    'M': [
        [1,1,1,1],
        [1,,1,1],
        [1,,1,1],
        [1,,,1],
        [1,,,1]
    ],
    'N': [
        [1, , , 1],
        [1, 1, , 1],
        [1, , 1, 1],
        [1, , , 1],
        [1, , , 1]
    ],
    'O': [
        [1, 1, 1],
        [1, , 1],
        [1, , 1],
        [1, , 1],
        [1, 1, 1]
    ],
    'P': [
        [1, 1, 1],
        [1, , 1],
        [1, 1, 1],
        [1,,],
        [1,,]
    ],
    'Q': [
        [, 1, 1,],
        [1, , , 1],
        [1, , , 1],
        [1, , 1, 1],
        [1, 1, 1, 1]
    ],
    'R': [
        [1, 1,],
        [1, , 1],
        [1, , 1],
        [1, 1,],
        [1, , 1]
    ],
    'S': [
        [1, 1, 1],
        [1,,],
        [1, 1, 1],
        [, , 1],
        [1, 1, 1]
    ],
    'T': [
        [1,1,1],
        [,1,],
        [,1,],
        [,1,],
        [,1,]
    ],
    'U': [
        [1,,1],
        [1,,1],
        [1,,1],
        [1,,1],
        [1,1,1]
    ],
    'V': [
        [1,,1],
        [1,,1],
        [1,,1],
        [1,,1],
        [,1,]
    ],
    'W': [
        [1,,,1],
        [1,,,1],
        [1,,,1],
        [1,,1,1],
        [1,1,1,1]
    ],
    'X': [
        [1,,1],
        [1,,1],
        [,1,],
        [1,,1],
        [1,,1]
    ],
    'Y': [
        [1, , 1],
        [1, , 1],
        [, 1,],
        [, 1,],
        [, 1,]
    ],
    'Z': [
        [1, 1, 1],
        [, , 1],
        [, 1,],
        [1,,],
        [1, 1, 1]
    ],
    '0': [
        [1,1,1],
        [1,,1],
        [1,,1],
        [1,,1],
        [1,1,1]
    ],
    '1': [
        [,1,],
        [,1,],
        [,1,],
        [,1,],
        [,1,]
    ],
    '2': [
        [1,1,1],
        [,,1],
        [1,1,1],
        [1,,],
        [1,1,1]
    ],
    '3':[
        [1,1,1],
        [,,1],
        [1,1,1],
        [,,1],
        [1,1,1]
    ],
    '4':[
        [1,,1],
        [1,,1],
        [1,1,1],
        [,,1],
        [,,1]
    ],
    '5':[
        [1,1,1],
        [1,,],
        [1,1,1],
        [,,1],
        [1,1,1]
    ],
    '6':[
        [1,1,1],
        [1,,],
        [1,1,1],
        [1,,1],
        [1,1,1]
    ],
    '7':[
        [1,1,1],
        [,,1],
        [,,1],
        [,,1],
        [,,1]
    ],
    '8':[
        [1,1,1],
        [1,,1],
        [1,1,1],
        [1,,1],
        [1,1,1]
    ],
    '9':[
        [1,1,1],
        [1,,1],
        [1,1,1],
        [,,1],
        [1,1,1]
    ],
    '[': [
        [,1,1],
        [,1,],
        [,1,],
        [,1,],
        [,1,1]
    ],
    ']': [
        [1,1,],
        [,1,],
        [,1,],
        [,1,],
        [1,1,]
    ],
    ' ': [
        [,,],
        [,,],
        [,,],
        [,,],
        [,,]
    ],
    '>': [
        [0,0,1,0,0],
        [0,0,1,1,0],
        [1,1,1,1,1],
        [0,0,1,1,0],
        [0,0,1,0,0]
    ],
    ':': [
        [,,],
        [,1,],
        [,,],
        [,1,],
        [,,]
    ],
    '`': [
        [,1,],
        [,1,],
        [,,],
        [,,],
        [,,]
    ],
    ',': [
        [,,],
        [,,],
        [,,],
        [,1,],
        [,1,]
    ],
    '.': [
        [,,],
        [,,],
        [,,],
        [,,],
        [,1,]
    ],
    '|':
    []  //CR
};
