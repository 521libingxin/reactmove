import React from 'react';
export default class Linelist extends React.Component {
    state = {
        linelist:[],
        oldlist :[],
        setsize: 20
    }
    /*
        getpoint
            判断两种方式数量最少
            相等情况下选择第一种
            
        getpoint

    */
    getpointstring = (obj) =>{
        this.state.linelist = [];
        let startx = obj.x;
        let starty = obj.y;
        let fromstr = ',';
        for(let i = 0;i < obj.w;i++){
            fromstr += (i+startx)+'-'+starty+',';
            fromstr += (i+startx)+'-'+(starty+obj.h)+',';
        }
        for(let j = 0;j < obj.h;j++){
            fromstr += startx+'-'+(j+starty)+',';
            fromstr += (startx+obj.w)+'-'+(j+starty)+',';
        }
        return fromstr;
    }
    pushlist = (pointlistfrom,from,fromobj) => {
        if(from.type === 'pt'){
            pointlistfrom.push({
                x:from.x,
                y:from.y - this.state.setsize,
                list:[{
                    to:from,
                    from:{
                        x:from.x,
                        y:from.y - this.state.setsize
                    }
                }],
                level:1
            });
            pointlistfrom.push({
                x:from.x - fromobj.w/2 - this.state.setsize,
                y:from.y - this.state.setsize,
                list:[{
                    to:{
                        x:from.x,
                        y:from.y - this.state.setsize
                    },
                    from:{
                        x:from.x - fromobj.w/2 - this.state.setsize,
                        y:from.y - this.state.setsize,
                    }
                },
                {
                    to:from,
                    from:{
                        x:from.x,
                        y:from.y - this.state.setsize
                    }
                }],
                level:2
            });
            pointlistfrom.push({
                x:from.x + fromobj.w/2 + this.state.setsize,
                y:from.y - this.state.setsize,
                list:[{
                    to:{
                        x:from.x,
                        y:from.y - this.state.setsize
                    },
                    from:{
                        x:from.x + fromobj.w/2 + this.state.setsize,
                        y:from.y - this.state.setsize,
                    }
                },{
                    to:from,
                    from:{
                        x:from.x,
                        y:from.y - this.state.setsize
                    }
                }],
                level:2
            });
        }
        if(from.type === 'pb'){
            pointlistfrom.push({
                x:from.x,
                y:from.y + this.state.setsize,
                list:[{
                    to:from,
                    from:{
                        x:from.x,
                        y:from.y + this.state.setsize
                    }
                }],
                level:1
            });
            pointlistfrom.push({
                x:from.x + fromobj.w/2 + this.state.setsize,
                y:from.y + this.state.setsize,
                list:[{
                    to:{
                        x:from.x,
                        y:from.y + this.state.setsize
                    },
                    from:{
                        x:from.x + fromobj.w/2 + this.state.setsize,
                        y:from.y + this.state.setsize,
                    }
                },{
                    to:from,
                    from:{
                        x:from.x,
                        y:from.y + this.state.setsize
                    }
                }],
                level:2
            });
            pointlistfrom.push({
                x:from.x - fromobj.w/2 - this.state.setsize,
                y:from.y + this.state.setsize,
                list:[{
                    to:{
                        x:from.x,
                        y:from.y + this.state.setsize
                    },
                    from:{
                        x:from.x - fromobj.w/2 - this.state.setsize,
                        y:from.y + this.state.setsize,
                    }
                },{
                    to:from,
                    from:{
                        x:from.x,
                        y:from.y + this.state.setsize
                    }
                }],
                level:2
            });
        }
        if(from.type === 'pl'){
            pointlistfrom.push({
                x:from.x - this.state.setsize,
                y:from.y,
                list:[{
                    to:from,
                    from:{
                        x:from.x - this.state.setsize,
                        y:from.y,
                    }
                }],
                level:1
            });
            pointlistfrom.push({
                x:from.x - this.state.setsize,
                y:from.y - fromobj.h/2 - this.state.setsize,
                list:[{
                    to:{
                        x:from.x - this.state.setsize,
                        y:from.y,
                    },
                    from:{
                        x:from.x - this.state.setsize,
                        y:from.y - fromobj.h/2 - this.state.setsize,
                    }
                },{
                    to:from,
                    from:{
                        x:from.x - this.state.setsize,
                        y:from.y,
                    }
                }],
                level:2
            });
            pointlistfrom.push({
                x:from.x - this.state.setsize,
                y:from.y + fromobj.h/2 + this.state.setsize,
                list:[{
                    to:{
                        x:from.x - this.state.setsize,
                        y:from.y,
                    },
                    from:{
                        x:from.x - this.state.setsize,
                        y:from.y + fromobj.h/2 + this.state.setsize,
                    }
                },{
                    to:from,
                    from:{
                        x:from.x - this.state.setsize,
                        y:from.y,
                    }
                }],
                level:2
            });
        }
        if(from.type === 'pr'){

            pointlistfrom.push({
                x:from.x + this.state.setsize,
                y:from.y,
                list:[{
                    to:from,
                    from:{
                        x:from.x + this.state.setsize,
                        y:from.y,
                    }
                }],
                level:1
            });
            pointlistfrom.push({
                x:from.x + this.state.setsize,
                y:from.y + fromobj.h/2 + this.state.setsize,
                list:[{
                    to:{
                        x:from.x + this.state.setsize,
                        y:from.y,
                    },
                    from:{
                        x:from.x + this.state.setsize,
                        y:from.y + fromobj.h/2 + this.state.setsize,
                    }
                },{
                    to:from,
                    from:{
                        x:from.x + this.state.setsize,
                        y:from.y,
                    }
                }],
                level:2
            });
            pointlistfrom.push({
                x:from.x + this.state.setsize,
                y:from.y - fromobj.h/2 - this.state.setsize,
                list:[{
                    to:{
                        x:from.x + this.state.setsize,
                        y:from.y,
                    },
                    from:{
                        x:from.x + this.state.setsize,
                        y:from.y - fromobj.h/2 - this.state.setsize,
                    }
                },{
                    to:from,
                    from:{
                        x:from.x + this.state.setsize,
                        y:from.y,
                    }
                }],
                level:2
            });
        }
    };
    getpoint = (linecom) =>{
        console.log(123123);
        var fromstr = this.getpointstring(linecom.fromobj);
        var endstr = this.getpointstring(linecom.endobj);
        // let startx = linecom.fromobj.x;
        // let starty = linecom.fromobj.y;
        // let fromstr = ',';
        // for(let i = 0;i < linecom.fromobj.w;i++){
        //     fromstr += (i+startx)+'-'+starty+',';
        //     fromstr += (i+startx)+'-'+(starty+linecom.fromobj.h)+',';
        // }
        // for(let j = 0;j < linecom.fromobj.h;j++){
        //     fromstr += startx+'-'+(j+starty)+',';
        //     fromstr += (startx+linecom.fromobj.w)+'-'+(j+starty)+',';
        // }
        // for (let i of linecom.fromobj.w) {
        //     for(let j of linecom.fromobj.h){
        //         fromstr += i+'-'+j+',';
        //     }
        // }
        let pointlistfrom = [{
            x:linecom.from.x,
            y:linecom.from.y,
            list:[],
            level:0
        }];
        let pointlistto = [{
            x:linecom.to.x,
            y:linecom.to.y,
            list:[],
            level:0
        }];
        
        this.pushlist(pointlistfrom,linecom.from,linecom.fromobj);
        this.pushlist(pointlistto,linecom.to,linecom.endobj);

        //console.log(pointlistfrom,pointlistto);
        const pointwaylist = [];
        for(let i = 0;i < pointlistfrom.length;i++){
            for(let j = 0;j < pointlistto.length;j++){
                let fr = pointlistfrom[i];
                let en = pointlistto[j];
                if(fr.x === en.x || fr.x === en.x){
                    pointwaylist.push({
                        level:fr.level+en.level+1,
                        pointlist:[{
                            from:fr,
                            to:en
                        }],
                        fromlist:fr.list,
                        endlist:en.list
                    })
                } else {
                    pointwaylist.push({
                        level:fr.level+en.level+2,
                        pointlist:[{
                            from:fr,
                            to:{x:fr.x,y:en.y}
                        },{
                            from:{x:fr.x,y:en.y},
                            to:en
                        }],
                        fromlist:fr.list,
                        endlist:en.list
                    });
                    pointwaylist.push({
                        level:fr.level+en.level+2,
                        pointlist:[{
                            from:fr,
                            to:{x:en.x,y:fr.y}
                        },{
                            from:{x:en.x,y:fr.y},
                            to:en
                        }],
                        fromlist:fr.list,
                        endlist:en.list
                    })
                }
            }
        }
        pointwaylist.sort((a,b) => {
            return a.level - b.level;
        })
        for(let i = 0;i < pointwaylist.length;i++){
            if(this.getpointlistarray(pointwaylist[i].pointlist,fromstr+endstr,i)){
                this.state.linelist = this.state.linelist.concat(pointwaylist[i].fromlist,pointwaylist[i].pointlist,pointwaylist[i].endlist);
                // if(pointwaylist[i].pointlist[0]){
                //     this.state.linelist.push(pointwaylist[i].pointlist[0]);
                // }
                // if(pointwaylist[i].pointlist[1]){
                //     this.state.linelist.push(pointwaylist[i].pointlist[1]);
                // }
                break;
            };
        }
    }

    getpointlistarray(pointlist,checkstr,index){
        let pointarray = [];
        outer:
        for(let i = 0;i < pointlist.length;i++){
            if(pointlist[i].from.x === pointlist[i].to.x){
                if(pointlist[i].from.y > pointlist[i].to.y){
                    let alllength = pointlist[i].from.y - pointlist[i].to.y - 1;
                    //if(alllength < 3){return false}
                    inter:for(let j = 1;j < alllength;j++){
                        let onestr = ','+parseInt(pointlist[i].to.x) +"-"+ parseInt(pointlist[i].to.y + j)+','
                        pointarray.push(onestr);
                        //pointarray.push(pointlist[i].to.x +"-"+ (pointlist[i].to.y + j));
                        if(checkstr.indexOf(onestr) > -1){
                            //console.log(onestr);
                            return false;
                            //break outer;
                        };
                    }
                }
                if(pointlist[i].from.y < pointlist[i].to.y){
                    let alllength = pointlist[i].to.y - pointlist[i].from.y - 1;
                    //if(alllength < 3){return false}
                    inter:for(let j = 1;j < alllength;j++){
                        //pointarray.push(','+pointlist[i].to.x +"-"+ (pointlist[i].from.y + j)+',');
                        let onestr = ','+parseInt(pointlist[i].to.x) +"-"+ parseInt(pointlist[i].from.y + j)+',';
                        pointarray.push(onestr);
                        if(checkstr.indexOf(onestr) > -1){
                            //console.log(onestr);
                            return false;
                            //break outer;
                        };
                    }
                }
            }
            if(pointlist[i].from.y === pointlist[i].to.y){
                if(pointlist[i].from.x > pointlist[i].to.x){
                    let alllength = pointlist[i].from.x - pointlist[i].to.x - 1;
                    //if(alllength < 3){return false}
                    inter:for(let j = 1;j < alllength;j++){
                        //pointarray.push(','+(pointlist[i].to.x + j) +"-"+ pointlist[i].to.y+',');
                        let onestr = ','+parseInt(pointlist[i].to.x + j) +"-"+ parseInt(pointlist[i].to.y)+',';
                        pointarray.push(onestr);
                        if(checkstr.indexOf(onestr) > -1){
                            //console.log(onestr);
                            return false;
                            //break outer;
                        };
                    }
                }
                if(pointlist[i].from.x < pointlist[i].to.x){
                    let alllength = pointlist[i].to.x - pointlist[i].from.x - 1;
                    //if(alllength < 3){return false}
                    inter:for(let j = 1;j < alllength;j++){
                        //pointarray.push(','+(pointlist[i].from.x + j)  +"-"+ pointlist[i].to.y+',');
                        let onestr = ','+parseInt(pointlist[i].from.x + j)  +"-"+ parseInt(pointlist[i].to.y)+',';
                        pointarray.push(onestr);
                        if(checkstr.indexOf(onestr) > -1){
                            //console.log(onestr);
                            return false;
                            //break outer;
                        };
                    }
                }
            }
        }
        return true;
    }
    
    angle(start,end){
        var diff_x = end.x - start.x,
            diff_y = end.y - start.y;
        if(diff_x < 0){
            return 360*Math.atan(diff_y/diff_x)/(2*Math.PI) -180;
        } else {
            return 360*Math.atan(diff_y/diff_x)/(2*Math.PI);
        }
        
    }
    getlength(start,end){
        return Math.sqrt(Math.pow(end.x - start.x,2) + Math.pow(end.y - start.y,2));
    }
    render(){
        let liststring = JSON.stringify(this.props.list);
        if(this.state.oldlist !== liststring){
            this.state.oldlist = liststring;
            this.getpoint(this.props.list);
        }
        //this.getpoint(this.props.list);
        const linelist = [];
        for(let i = 0;i < this.state.linelist.length-1;i++){
            let pfrom = this.state.linelist[i].from;
            let pto = this.state.linelist[i].to;
            let rotf = this.angle(pfrom,pto);
            let lengtf = this.getlength(pfrom,pto);
            linelist.push({
                rotf:rotf,
                width:lengtf,
                top:pfrom.y,
                left:pfrom.x
            });
        }
        const linelisthtml = linelist.map((number,index) =>
            <div className="linestyle" style={{transform:[`rotate(${number.rotf}deg)`],top:number.top,left:number.left,width:number.width}} key={index}>
            </div>
        );
        let linelistend = '';
        if(this.state.linelist[this.state.linelist.length-1]){
            let pfrom = this.state.linelist[this.state.linelist.length-1].from;
            let pto = this.state.linelist[this.state.linelist.length-1].to;
            let rotf = this.angle(pfrom,pto);
            let lengtf = this.getlength(pfrom,pto);
            let linelistendobj = {
                    rotf:rotf,
                    width:lengtf,
                    top:pfrom.y,
                    left:pfrom.x
                };
            linelistend = <div className="linestyle" style={{transform:[`rotate(${linelistendobj.rotf}deg)`],top:linelistendobj.top,left:linelistendobj.left,width:linelistendobj.width}} >
                <div className="lineup"></div>
                <div className="linedown"></div>
            </div>
        }
        
        return(
          <div>
              {linelisthtml}
              {linelistend}
          </div>
        )
      }
}