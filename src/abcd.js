import React from 'react';
import Linelist from './line.js';
import Linelistmouse from './mouseline.js'
export default class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.darwline = this.darwline.bind(this);
      this.activateLasers = this.activateLasers.bind(this);
      this.activateLasersright = this.activateLasersright.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
            movestart:0,
            default:{
                w:50,
                h:150,
                minw:30,
                minh:30
            },
            canvasposition:{
                x:0,
                y:0
            },
            mouseposition:{
                x:0,
                y:0
            },
            componentposition:{
                x:0,
                y:0,
                w:0,
                h:0,
                id:0
            },
            lineposition:{
                x:0,
                y:0,
                id:0,
                p:0
            },
            componentarrayindex:0,
            componentarray:[],
            linearray:[],
            selectindex:-1,
            linehover:{},
            mouseline:{from:{x:0,y:0},to:{x:0,y:0}}
        };
    }
    componentDidMount() {
      document.addEventListener('mouseup',(event)=>{
        event.stopPropagation();
        if(this.state.movestart === 1){
            if(this.state.canvasposition.x != 0 && (this.state.componentposition.x > this.state.canvasposition.x)){
                this.state.componentarray.push({
                    x:this.state.componentposition.x - this.state.canvasposition.x,
                    y:this.state.componentposition.y - this.state.canvasposition.y,
                    w:this.state.default.w,
                    h:this.state.default.h,
                    id:(new Date()).getTime(),
                    code:'123',
                    name:'900g听线'
                });
            }
        }
        const componentposition = {
            x:0,
            y:0
        }
        const mouseposition = {
            x:0,
            y:0
        }
        this.setState({mouseposition: mouseposition});
        this.setState({componentposition: componentposition});
        this.setState({movestart: 0});
        this.setState({mouseline: {from:{x:0,y:0},to:{x:0,y:0}}});
        this.setState({linehover: {}});
      })
      document.addEventListener('mousemove',(e)=>{
        e.stopPropagation();
        if(this.state.movestart === 1 ){
            const movex = e.pageX - this.state.mouseposition.x;
            const movey = e.pageY - this.state.mouseposition.y;
            const componentposition = {
                x:this.state.componentposition.x + movex,
                y:this.state.componentposition.y + movey
            }
            const mouseposition = {
                x:this.state.mouseposition.x + movex,
                y:this.state.mouseposition.y + movey
            }
            this.setState({mouseposition: mouseposition});
            this.setState({componentposition: componentposition});
        } else if(this.state.movestart === 2){
            const movex = e.pageX - this.state.mouseposition.x;
            const movey = e.pageY - this.state.mouseposition.y;

            const mouseposition = {
                x:this.state.mouseposition.x + movex,
                y:this.state.mouseposition.y + movey
            }
            this.state.componentarray[this.state.componentarrayindex].x = this.state.componentarray[this.state.componentarrayindex].x + movex;
            this.state.componentarray[this.state.componentarrayindex].y = this.state.componentarray[this.state.componentarrayindex].y + movey;
            this.setState({mouseposition: mouseposition});
        } else if(this.state.movestart === 3){
            const movex = e.pageX - this.state.mouseposition.x;
            const movey = e.pageY - this.state.mouseposition.y;

            const mouseposition = {
                x:this.state.mouseposition.x + movex,
                y:this.state.mouseposition.y + movey
            }
            let endw = this.state.componentarray[this.state.componentarrayindex].w + movex;
            if(endw > this.state.default.minw){
                this.state.componentarray[this.state.componentarrayindex].w = endw;
            }
            let endy = this.state.componentarray[this.state.componentarrayindex].h + movey;
            if(endy > this.state.default.minh){
                this.state.componentarray[this.state.componentarrayindex].h = endy;
            }
            this.setState({mouseposition: mouseposition});
        } else if(this.state.movestart === 4){
            const movex = e.pageX - this.state.mouseposition.x;
            const movey = e.pageY - this.state.mouseposition.y;

            const mouseposition = {
                x:this.state.mouseposition.x + movex,
                y:this.state.mouseposition.y + movey
            }
            this.state.componentarray[this.state.componentarrayindex].x = this.state.componentarray[this.state.componentarrayindex].x + movex;
            this.state.componentarray[this.state.componentarrayindex].y = this.state.componentarray[this.state.componentarrayindex].y + movey;
            let endw = this.state.componentarray[this.state.componentarrayindex].w - movex;
            if(endw > this.state.default.minw){
                this.state.componentarray[this.state.componentarrayindex].w = endw;
            }
            let endy = this.state.componentarray[this.state.componentarrayindex].h - movey;
            if(endy > this.state.default.minh){
                this.state.componentarray[this.state.componentarrayindex].h = endy;
            }
            this.setState({mouseposition: mouseposition});
        } else if(this.state.movestart === 5){
            const movex = e.pageX - this.state.mouseposition.x;
            const movey = e.pageY - this.state.mouseposition.y;

            const mouseposition = {
                x:this.state.mouseposition.x + movex,
                y:this.state.mouseposition.y + movey
            }
            this.state.componentarray[this.state.componentarrayindex].x = this.state.componentarray[this.state.componentarrayindex].x + movex;
            
            let endw = this.state.componentarray[this.state.componentarrayindex].w - movex;
            let endh = this.state.componentarray[this.state.componentarrayindex].h + movey;
            if(endw > this.state.default.minw){
                this.state.componentarray[this.state.componentarrayindex].w = endw;
            }
            if(endh > this.state.default.minh){
                this.state.componentarray[this.state.componentarrayindex].h = endh;
            }
            this.setState({mouseposition: mouseposition});
        } else if(this.state.movestart === 6){
            const movex = e.pageX - this.state.mouseposition.x;
            const movey = e.pageY - this.state.mouseposition.y;

            const mouseposition = {
                x:this.state.mouseposition.x + movex,
                y:this.state.mouseposition.y + movey
            }
            let endw = this.state.componentarray[this.state.componentarrayindex].w + movex;
            let endh = this.state.componentarray[this.state.componentarrayindex].h - movey;
            this.state.componentarray[this.state.componentarrayindex].y = this.state.componentarray[this.state.componentarrayindex].y + movey;
            if(endw > this.state.default.minw){
                this.state.componentarray[this.state.componentarrayindex].w = endw;
            }
            if(endh > this.state.default.minh){
                this.state.componentarray[this.state.componentarrayindex].h = endh;
            }
            this.setState({mouseposition: mouseposition});
        } else if(JSON.stringify(this.state.movestart).indexOf('p') > -1) {

            
            let fromobj = this.findobjbyid(this.state.lineposition.id);
            let frompoint = this.checkdirection(this.state.lineposition,fromobj);
            this.setState({linehover: {
                from:frompoint,
                fromobj:fromobj,
                to:{
                    x:e.pageX - this.state.canvasposition.x,
                    y:e.pageY - this.state.canvasposition.y,
                }
            }});
            console.log(this.state.linehover);
            //let endpoint = this.checkdirection(this.state.linearray[i].to,endobj);

            // this.setState({mouseline: {
            //     from:{
            //         x:this.state.lineposition.x,
            //         y:this.state.lineposition.y
            //     },
            //     to:{
            //         x:e.pageX,
            //         y:e.pageY
            //     }}
            // });
            // this.setState({mouseline: {
            //     from:this.state.lineposition,
            //     fromobj:fromobj,
            //     to:{
            //         x:e.pageX,
            //         y:e.pageY
            //     }}
            // });
        }
      })
    }
  
    activateLasers(e){
        const mouseposition = {
            x:e.pageX,
            y:e.pageY
        }
        this.setState({componentposition: {x:e.pageX-e.nativeEvent.offsetX,y:e.pageY-e.nativeEvent.offsetY}});
        this.setState({mouseposition: mouseposition});
        this.setState({movestart: 1});
    }
    activateLasersright(index,e){
        console.log(this.state.componentarray[index]);
        const mouseposition = {
            x:e.pageX,
            y:e.pageY
        }
        this.setState({mouseposition: mouseposition});
        const componentposition = {
            x:this.state.componentarray[index].x,
            y:this.state.componentarray[index].y,
            w:this.state.componentarray[index].w,
            h:this.state.componentarray[index].h,
            id:this.state.componentarray[index].id
        }
        this.setState({componentposition: componentposition});
        this.setState({movestart: 2});
        this.setState({componentarrayindex: index});
    }
    activateLasersresize(index,key,e){
        e.stopPropagation();
        const mouseposition = {
            x:e.pageX,
            y:e.pageY
        }
        this.setState({mouseposition: mouseposition});
        const componentposition = {
            x:this.state.componentarray[index].x,
            y:this.state.componentarray[index].y,
            w:this.state.componentarray[index].w,
            h:this.state.componentarray[index].h,
            id:this.state.componentarray[index].id
        }
        this.setState({componentposition: componentposition});
        this.setState({movestart: key});
        this.setState({componentarrayindex: index});
    }
    darwline(index,key,e){
        e.stopPropagation();
        const mouseposition = {
            x:e.pageX,
            y:e.pageY
        }
        this.setState({mouseposition: mouseposition});
        const lineposition = {
            x:e.pageX,
            y:e.pageY,
            id:this.state.componentarray[index].id,
            p:key
        }
        this.setState({lineposition: lineposition});
        this.setState({movestart: key});
        this.setState({componentarrayindex: index});
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
    createline(index,key,e){
        console.log(123213123);
        e.stopPropagation();
        let newlist = this.state.linearray;
        if(this.state.lineposition.id != this.state.componentarray[index].id){
            newlist.push({
                from:{
                    id:this.state.lineposition.id,
                    p:this.state.lineposition.p
                },
                to:{
                    id:this.state.componentarray[index].id,
                    p:key
                }
            });
            // newlist.push({
            //     from:this.state.componentarray[index],
            //     to:this.state.componentarray[index]
            // });
        }
        this.setState({linearray: newlist});
        console.log(this.state.linearray);
    }
    darwlinelist(data,e){
        console.log('d',data,e);
    }
    findobjbyid(id){
        for(let i = 0;i < this.state.componentarray.length;i++){
            if(this.state.componentarray[i].id == id){
                return this.state.componentarray[i];
            }
        }
    }
    showproductname(index,e){
        this.setState({selectindex: index});
    }
    handleChange(key,event){
        const newarray = this.state.componentarray;
        newarray[this.state.selectindex][key] = event.target.value;
        this.setState({componentarray: newarray});
    }
    mouseenter = (e) => {
        if(e.target.className === "jsplumbright"){
            if(this.state.canvasposition.x !== e.pageX-e.nativeEvent.offsetX || this.state.canvasposition.y !== e.pageY-e.nativeEvent.offsetY){
                console.log(e.pageX-e.nativeEvent.offsetX,e.pageY-e.nativeEvent.offsetY)
                this.setState({canvasposition: {x:e.pageX-e.nativeEvent.offsetX,y:e.pageY-e.nativeEvent.offsetY}});
            }
        }
    }
    getlineobj = (from,to) => {
        return {
            rot:this.angle(from,to),
            lengt:this.getlength(from,to) - 2,
            top:from.y - this.state.canvasposition.y,
            left:from.x - this.state.canvasposition.x
        }
        let rot = this.angle(this.state.mouseline.from,this.state.mouseline.to);
        let lengt = this.getlength(this.state.mouseline.from,this.state.mouseline.to) -2;
        let top = this.state.mouseline.from.y - this.state.canvasposition.y;
        let left = this.state.mouseline.from.x - this.state.canvasposition.x;
    }
    checkdirection = (from,fromobj) => {
        let frompoint = {};
        if(from.p == 'pr'){
            frompoint = {
                x:fromobj.x + fromobj.w,
                y:fromobj.y + fromobj.h/2,
                type:from.p
            }
        } else if(from.p == 'pt') {
            frompoint = {
                x:fromobj.x + fromobj.w/2,
                y:fromobj.y,
                type:from.p
            }
        } else if(from.p == 'pl') {
            frompoint = {
                x:fromobj.x,
                y:fromobj.y + fromobj.h/2,
                type:from.p
            }
        } else if(from.p == 'pb') {
            frompoint = {
                x:fromobj.x + fromobj.w/2,
                y:fromobj.y + fromobj.h,
                type:from.p
            }
        }
        return frompoint ;
    }
    render() {
        const movestart = this.state.movestart;
        const componentarray = this.state.componentarray;
        const listItems = this.state.componentarray.map((number,index) =>
            <div style={{left:number.x,top:number.y,width:number.w,height:number.h}} onDoubleClick={(e) => this.showproductname(index, e)} onMouseDown={(e) => this.activateLasersright(index, e)} className="jsplumbmove" key={index}>
                <div className="lefttop componentresize" onMouseDown={(e) => this.activateLasersresize(index,4, e)}></div>
                <div className="leftbottom componentresize" onMouseDown={(e) => this.activateLasersresize(index,5, e)}></div>
                <div className="righttop componentresize" onMouseDown={(e) => this.activateLasersresize(index,6, e)}></div>
                <div className="rightbottom componentresize" onMouseDown={(e) => this.activateLasersresize(index,3, e)}></div>
                <div className="rightpoint componentpoint" onMouseDown={(e) => this.darwline(index,'pr', e)} onMouseUp={(e) => this.createline(index,'pr', e)}></div>
                <div className="toppoint componentpoint"  onMouseDown={(e) => this.darwline(index,'pt', e)} onMouseUp={(e) => this.createline(index,'pt', e)}></div>
                <div className="leftpoint componentpoint" onMouseDown={(e) => this.darwline(index,'pl', e)} onMouseUp={(e) => this.createline(index,'pl', e)}></div>
                <div className="bottompoint componentpoint" onMouseDown={(e) => this.darwline(index,'pb', e)} onMouseUp={(e) => this.createline(index,'pb', e)}></div>
                <div className="jsplumbhovername">{number.name}</div>
            </div>
        );
        let Greeting;
        if (this.state.movestart === 1) {
            Greeting = <div style={{left:this.state.componentposition.x,top:this.state.componentposition.y}} className="jsplumbhover"></div>;
        }
        let line;
        let linearray = [];
        // let lineobj = {
        //     from:frompoint,
        //     fromobj:fromobj,
        //     to:endpoint,
        //     endobj:endobj
        // } 
        // if(this.state.mouseline.from.x === this.state.mouseline.to.x || this.state.mouseline.from.y === this.state.mouseline.to.y){
                
        //     if (JSON.stringify(this.state.movestart).indexOf('p') > -1) {
        //         let rot = this.angle(this.state.mouseline.from,this.state.mouseline.to);
        //         let lengt = this.getlength(this.state.mouseline.from,this.state.mouseline.to) -2;
        //         let top = this.state.mouseline.from.y - this.state.canvasposition.y;
        //         let left = this.state.mouseline.from.x - this.state.canvasposition.x;
        //         line = <div className="linestyle" style={{transform:[`rotate(${rot}deg)`],top:this.state.mouseline.from.y - this.state.canvasposition.y,left:this.state.mouseline.from.x-this.state.canvasposition.x,width:lengt}}>
        //             {/* <div class="lineup"></div>
        //             <div class="linedown"></div> */}
        //         </div>;
        //     }
        // } else {
        //     let point1 = this.state.mouseline.from;
        //     let point2 = {y:this.state.mouseline.from.y,x:this.state.mouseline.from.x + (this.state.mouseline.to.x - this.state.mouseline.from.x)/2};
        //     let point3 = {y:this.state.mouseline.to.y,x:this.state.mouseline.from.x + (this.state.mouseline.to.x - this.state.mouseline.from.x)/2};
        //     let point4 = this.state.mouseline.to;
        //     linearray.push(this.getlineobj(point1,point2))
        //     linearray.push(this.getlineobj(point2,point3))
        //     linearray.push(this.getlineobj(point3,point4))
        //     line = linearray.map((number,index) =>
        //         <div className="linestyle" style={{transform:[`rotate(${number.rot}deg)`],top:number.top,left:number.left,width:number.lengt}}>

        //         </div>
        //     );
        // }
        let linelist = [];
        let linecomlist = [];
        for(let i = 0;i < this.state.linearray.length;i++){
            // let fromid = this.state.linearray[i].from.id;
            let fromobj = this.findobjbyid(this.state.linearray[i].from.id);
            let endobj = this.findobjbyid(this.state.linearray[i].to.id);
            let frompoint = this.checkdirection(this.state.linearray[i].from,fromobj);
            let endpoint = this.checkdirection(this.state.linearray[i].to,endobj);
            
            linecomlist.push({
                from:frompoint,
                fromobj:fromobj,
                to:endpoint,
                endobj:endobj
            })
            let rotf = this.angle(frompoint,endpoint);
            let lengtf = this.getlength(frompoint,endpoint);
            linelist.push({
                rotf:rotf,
                width:lengtf-2,
                top:frompoint.y,
                left:frompoint.x
            });
            // linelist = <div className="line-style" style={{transform:[`rotate(${rotf}deg)`],top:frompoint.y,left:frompoint.x,width:lengtf-2}}></div>;
            // let x = this.state.linearray[i].from
            // console.log(fromobj,endobj,linelist,rotf);
            //this.darwlinelist(this.state.linearray[i],123);
        }
        const linelisthtml = linelist.map((number,index) =>
            //<div>{number.rotf}</div>
            <div className="linestyle" style={{transform:[`rotate(${number.rotf}deg)`],top:number.top,left:number.left,width:number.width}} key={index}>
                {/* <div class="lineup"></div>
                <div class="linedown"></div> */}
            </div>
        );
        const linehoverhtml = <Linelistmouse list={this.state.linehover}></Linelistmouse>
        const linecomhtml = linecomlist.map((number,index) =>
            <Linelist list={number} key={index}></Linelist>
        );
        let jsplumbtext;
        if(this.state.selectindex > -1){
            jsplumbtext = <div>
                代码：<input type="text" value={this.state.componentarray[this.state.selectindex].code} onChange={(e) => this.handleChange('code', e)} /><br></br>
                名称：<input type="text" value={this.state.componentarray[this.state.selectindex].name} onChange={(e) => this.handleChange('name', e)} />
                </div>
        }
        return (
            <div>
                <div className="styleall">
                <div className="jsplumbleft">
                    {/* <div className="testrot" style={{transform:[`rotate(45deg)`]}} ></div>
                    <div className="testrot" style={{transform:[`rotate(90deg)`]}} ></div>
                    <div className="testrot" style={{transform:[`rotate(135deg)`]}} ></div>
                    <div className="testrot" style={{transform:[`rotate(180deg)`]}} ></div>
                     */}
                    
                    <div className="jsplumbadd" onMouseDown={this.activateLasers}>添加</div>
                    {Greeting}
                </div>
                <div className="jsplumbright" onMouseMove={this.mouseenter}>
                
                    {/* <div className="linestylet" style={{transform:[`rotate(45deg)`]}} ></div>
                    <div className="linestylet" style={{transform:[`rotate(90deg)`]}} ></div>
                    <div className="linestylet" style={{transform:[`rotate(135deg)`]}} ></div>
                    <div className="linestylet" style={{transform:[`rotate(180deg)`]}} ></div>
                    {line} */}
                    {/* {linelisthtml} */}
                    {linehoverhtml}
                    {linecomhtml}
                    <div>{listItems}</div>
                </div>
                <div className="jsplumbtext">
                    {jsplumbtext}
                </div>
                </div>
            </div>
        );
    }
  }