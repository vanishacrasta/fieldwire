import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
       super(props);
       this.state = {
         response1: '',
         response1p: '',
         response2: '',
          response2p: '',
         response3:'',
          response3p:'',
         response4: '',
            response4p: '',
         response5:'',
          response5p:'',
         response6:  '',
          response6p:  '',
         response7: '',
          response7p:  '',
         response8: '',
          response8p:  '',
         response9: '',
          response9p:  '',
         response10: '',
          response10p:  '',
         response11: '',
          response11p:  '',
          response12: '',
          response12p: '',
         response13 : '',
           response13p: '',
         response14:  '',
           response14p: '',
         response15: '',
           response15p: '',
         response16:  '',
           response16p: '',
         response17: '',
           response17p: '',
         response18:  '',
           response18p: '',
         response19:'',
           response19p: '',
         response20:  '',
           response20p: '',

       };
this.Images=this.Images.bind(this);
this.handleChange=this.handleChange.bind(this);
   }
   handleChange(event) {
  console.log(event.target.value);
      this.setState({value: event.target.value.replace(" ","_")});
    }
   Images ()  {
       axios({
           method: 'get',
           url: 'https://api.imgur.com/3/topics/'+this.state.value+'/',
           headers: {
               authorization: 'Client-ID 74af0eb0942efd0'
           }
       }).then((response) => {

          console.log(response);

              this.setState({
                response1: response.data.data[0].link,
                response1p: response.data.data[0].title,
                response2:  response.data.data[0].link,
                response2p: response.data.data[0].title,
                response3: response.data.data[10].link,
                response3p: response.data.data[10].title,
                response4:  response.data.data[4].link,
                response4p: response.data.data[4].title,
                response5: response.data.data[9].link,
                response5p: response.data.data[9].title,
                  response6: response.data.data[4].link,
                    response6p: response.data.data[4].title,
                    response7: response.data.data[4].link,
                      response7p: response.data.data[4].title,
                      response8: response.data.data[7].link,
                        response8p: response.data.data[7].title,
                        response9: response.data.data[29].link,
                          response9p: response.data.data[29].title,
                          response10: response.data.data[28].link,
                            response10p: response.data.data[28].title,
                          response11: response.data.data[13].link,
                            response11p: response.data.data[13].title,
                            response12: response.data.data[31].link,
                              response12p: response.data.data[31].title,
                              response13: response.data.data[25].link,
                                response13p: response.data.data[25].title,
                                response14: response.data.data[27].link,
                                  response14p: response.data.data[27].title,
                                  response15: response.data.data[25].link,
                                    response15p: response.data.data[25].title,
                                  response16: response.data.data[25].link,
                                    response16p: response.data.data[25].title,
                                    response17: response.data.data[59].link,
                                      response17p: response.data.data[59].title,
                                      response18: response.data.data[21].link,
                                        response18p: response.data.data[21].title,
                                        response19: response.data.data[56].link,
                                          response19p: response.data.data[56].title,
                                          response20: response.data.data[58].link,
                                            response20p: response.data.data[58].title,
              });



      }).catch(function (response) {
         console.error(response);
       });
}


   render() {



      return (
      <div className="App">
        <div className="App-header">
        <div className="App-content"><br/><br/>
        <h1>What are you looking for?</h1><br/>
        <input type="text" name="searchtext" onChange={this.handleChange} value={this.state.value} placeholder="Enter text here"/><br/><br/><br/>
        <button onClick={this.Images}>Search</button>
        </div>
        </div>
        <div className="App-intro"><br/>

        <div id="wrapper">
      	<div id="columns">
      		<div className="pin">
          <a className="lightbox" href="#img"><img src={this.state.response1}/></a>
            <div className="lightbox-target" id="img"><img src={this.state.response1} draggable="true"/></div>
              <a class="lightbox-close" href="#"></a>
          <p>{this.state.response1p}</p></div>
          <div className="pin">  <a className="lightbox" href="#img2"><img src={this.state.response2}/></a>
              <div className="lightbox-target" id="img2"><img src={this.state.response2}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response2p}</p></div>
          <div className="pin">  <a className="lightbox" href="#img3"><img src={this.state.response3}/></a>
              <div className="lightbox-target" id="img3"><img src={this.state.response3}/></div>
                <a class="lightbox-close" href="#"></a>
              <p>{this.state.response3p}</p></div>
          <div className="pin"><a className="lightbox" href="#img4"><img src={this.state.response4} /></a>
              <div className="lightbox-target" id="img4"><img src={this.state.response4}/></div>
                <a class="lightbox-close" href="#"></a>
              <p>{this.state.response4p}</p></div>
          <div className="pin"><a className="lightbox" href="#img5"><img src={this.state.response5}/></a>
              <div className="lightbox-target" id="img5"><img src={this.state.response5}/></div>
                <a class="lightbox-close" href="#"></a>
              <p>{this.state.response5p}</p></div>
          <div className="pin"><a className="lightbox" href="#img6"><img src={this.state.response6}/></a>
              <div className="lightbox-target" id="img6"><img src={this.state.response6}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response6p}</p></div>
          <div className="pin"><a className="lightbox" href="#img7"><img src={this.state.response7}/></a>
              <div className="lightbox-target" id="img7"><img src={this.state.response7}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response7p}</p></div>
          <div className="pin"><a className="lightbox" href="#img8"><img src={this.state.response8}/></a>
              <div className="lightbox-target" id="img8"><img src={this.state.response8}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response8p}</p></div>
          <div className="pin"><a className="lightbox" href="#img9"><img src={this.state.response9}/></a>
              <div className="lightbox-target" id="img9"><img src={this.state.response9}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response9p}</p></div>
          <div className="pin"><a className="lightbox" href="#img10"><img src={this.state.response10}/></a>
              <div className="lightbox-target" id="img10"><img src={this.state.response10}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response10p}</p></div>
          <div className="pin"><a className="lightbox" href="#img11"><img src={this.state.response11}/></a>
              <div className="lightbox-target" id="img11"><img src={this.state.response11}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response11p}</p></div>
          <div className="pin"><a className="lightbox" href="#img12"><img src={this.state.response12}/></a>
              <div className="lightbox-target" id="img12"><img src={this.state.response12}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response12p}</p></div>
          <div className="pin"><a className="lightbox" href="#img13"><img src={this.state.response13}/></a>
              <div className="lightbox-target" id="img13"><img src={this.state.response13}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response13p}</p></div>
          <div className="pin"><a className="lightbox" href="#img14"><img src={this.state.response14}/></a>
              <div className="lightbox-target" id="img14"><img src={this.state.response14}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response14p}</p></div>
          <div className="pin"><a className="lightbox" href="#img15"><img src={this.state.response15}/></a>
              <div className="lightbox-target" id="img15"><img src={this.state.response15}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response15p}</p></div>
          <div className="pin"><a className="lightbox" href="#img16"><img src={this.state.response16}/></a>
              <div className="lightbox-target" id="img16"><img src={this.state.response16}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response16p}</p></div>
          <div className="pin"><a className="lightbox" href="#img17"><img src={this.state.response17}/></a>
              <div className="lightbox-target" id="img17"><img src={this.state.response17}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response17p}</p></div>
          <div className="pin"><a className="lightbox" href="#img18"><img src={this.state.response18}/></a>
              <div className="lightbox-target" id="img18"><img src={this.state.response18}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response18p}</p></div>
          <div className="pin"><a className="lightbox" href="#img19"><img src={this.state.response19}/></a>
              <div className="lightbox-target" id="img19"><img src={this.state.response19}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response19p}</p></div>
          <div className="pin"><a className="lightbox" href="#img20"><img src={this.state.response20}/></a>
              <div className="lightbox-target" id="img20"><img src={this.state.response20}/></div>
                <a class="lightbox-close" href="#"></a>
            <p>{this.state.response20p}</p></div>

        </div>
        </div>
         </div>
      </div>
    );
}
}

export default App;
