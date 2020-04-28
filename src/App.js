import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch,NavLink, useParams} from 'react-router-dom';
import "./App.css"
import styled, {createGlobalStyle, css} from "styled-components";


const searchBox =css`
box-shadow: 0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);
background-color:white;
border-radius: 10px;
padding:20 px;
`;

const GlobalStyle =createGlobalStyle`
body{
    align-items:center;
    padding:0%;
    margin:0;
    justify-content:center;
    background-color:lightgrey;
}
`;
function Home(){
   return( 
    <div>
   <h3>소개</h3>
   <Text/>
   </div>
   );
}
function Insight(){
    return( 
        <div>
       <h3>인사이트</h3>
       </div>
       );
}
var mapcontents = [//밖에서 데이터 배열로 받아오기
    {id:1, title:'map1', description:'map1 info'},
    { id:2, title:'map2', description:'map2 info'},
    { id:3, title:'map3', description:'map3 info'}
    
]
function Topic(){
    var params = useParams();
    var topic_id=params.topic_id;

    var selected_topic = {
        key: topic_id,
        title:'Sorry',
        description:'NotFound'//기본값 설정
    }
    
    for(var i=0; i<mapcontents.length;i++){
        if(mapcontents[i].id === Number(topic_id)){
            selected_topic = mapcontents[i];
            break;
        }
    }
    console.log('params',params,params.topic_id);

    return(
        <div>
            {selected_topic.key}
            <h3>{selected_topic.title}</h3>
                {selected_topic.description}
        </div>
    );
}


function Datatype(){

    return( 
        <div>
             <h3>종류별 데이터</h3>
             <Frame>
                <Button3><NavLink to="/datatype/map">지도
                    <img className="img1" src="https://image.shutterstock.com/image-vector/colorful-hi-detailed-vector-world-600w-1549569410.jpg" alt=""></img>
                    </NavLink></Button3>
                    <Button3><NavLink to="/datatype/graph">그래프 
                    <img className="img2" src="https://image.shutterstock.com/image-vector/bar-graph-line-templates-business-600w-754410247.jpg" alt=""></img>
                   </NavLink> </Button3>
                    <Button3><NavLink to="/datatype/chart">차트
                    <img className="img3" src="https://image.shutterstock.com/image-vector/business-data-market-elements-dot-600w-234267106.jpg" alt=""></img>
                    </NavLink></Button3>
                <Switch>
                    <Route path="/datatype/map"><DataTypeMap></DataTypeMap>
                    </Route>
                    <Route path="/datatype/graph">
                        그래프 데이터 솰랴솰랴...
                    </Route>
                    <Route path="/datatype/chart">
                        차트 데이터 솰랴솰랴...
                    </Route>
                </Switch>
                </Frame>
       </div>
       );
}
function DataTypeMap({key}){
    var lis = [];
    for(var i=0; i<mapcontents.length; i++){
           lis.push(<li key={mapcontents[i].id}><NavLink to={'/datatype/map/'+ mapcontents[i].id}>{mapcontents[i].title}</NavLink></li>);

        }
    return(
        
        <div>
               <h4>지도의 세부 리스트</h4> 
            <ul>
               {lis}
               
            </ul>
            <Route path="/datatype/map/:topic_id"><Topic></Topic></Route> 
        </div>
        );
}
function Text(){
        return(
            <div>
            <p>스마트시티 설계자
            -스마트 모빌리티에 집중되어있는 웹프로젝트의 특징으로 특정분야에서의 데이터 유무를 파악하기 
            간단하고 필요한 유형별 데이터를 수집하기 간편. 
            - 워드클라우딩을 통해 어떤 시설물들이 실질적으로 관심을 받고 필요한지 인사이트 제공
            </p>
            <p>
            도로공사 종사자
            -현재 스마트모빌리티의 도로 문제점등을 데이터로 분석하여 도로현장에서 각종 문제들을 파악하여 
            도로나 안전장치를 수리하거나 보완함.
            </p>
            <p>스마트 모빌리티 앱 개발자
            -위험지역 구간등의 새로운 데이터를 쉽게 모아 시민들에게 알림을 주거나 폰에서 모은 데이터를 
            볼 수 있는 앱 개발 지원
            </p>
    
            <p>일반 자전거 사용자
            - 주어진 데이터를 이용하여 스마트 시티 설계자에 의해 새롭게 생성될 스마트 안전장치나 스마트 도로,
            도로공사 종사자가 데이터로 인해 손질하는 몇가지 도로 손상문제, 앱 개발자들이 데이터를 가공하여 
            출시해줄 여러 서비스등으로 얻는 해택과 편리성</p>
            </div>
            );
}
class App extends Component{
    render(){
        return(
            <Container><GlobalStyle></GlobalStyle>
               <Header><h1>자전거 데이터 연구소</h1></Header>
            <InputContainer>
            <Input placeholder="검색어를 입력하시오"/>
            <Button2>검색</Button2>
            </InputContainer>
               <div ><Nav>
                   <NavLink exact to="/"><Button>Home</Button></NavLink>
                   <NavLink to="/datatype"><Button>Datatype</Button></NavLink>
                   <NavLink to="/insight"><Button>Insight</Button></NavLink>
               </Nav></div>
                <div className="Main">
                <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route path="/datatype"><Datatype></Datatype></Route>
                <Route path="/insight"><Insight></Insight></Route>
                
                <Route path="/">NotFound</Route>
                </Switch>
                </div>
            </Container>
        )
    }     
}
const Container = styled.div`
height:100;
width:100;
`
const Header = styled.div`
   font-weight:600;
   width: 100%;
   height: 100%;
   margin-top: 50px;
   margin-bottom:30px;
   color: black;
   display: flex;
   justify-content: center;
   ${searchBox};
   `
const Nav =styled.div`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  
`
const InputContainer =styled.div`
justify-items:center;
text-align:center;
margin-bottom:30px;
`
const Input = styled.input`
border-radius:3px;
padding:5px;
min-width:140px;

`
const Frame =styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-evenly;


`;
const Button =styled.button`
border-radius:30px;
padding:5px;
min-width:120px;
font-weight:600;
-webkit-appearance:none;
&:active, :checked{
color:blue;
border:1px solid;
}
`
const Button2 =styled.button`
border-radius:3px;
padding:4px;
min-width:70px;
font-weight:400;
-webkit-appearance:none;
&:active, :checked{
color:blue;
border:1px solid;
}
`
const Button3 =styled.button`
border-radius:0px;
padding:0px;
min-width:400px;
min-height:200px;
-webkit-appearance:none;
&:active, :checked{
color:blue;
border:1px solid;
}
`


export default App;
ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));