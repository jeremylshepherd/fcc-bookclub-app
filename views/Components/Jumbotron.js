var React = require("react");

var Jumbotron = React.createClass({
    getInitialState: function() {
        return ({
           isShadow: false,
           shadow: "",
           isLoggedIn: false,
           displayName: ""
        });  
    },
    
    handleShadow: function() {
        this.state.isShadow ? this.setState({shadow: "shadow", isShadow: false}) : this.setState({shadow: "", isShadow: true});
    },
    
    testLoggedIn: function() {
        this.state.isLoggedIn ? this.setState({isLoggedIn: false, displayName: ""}) : this.setState({isLoggedIn: true, displayName: "Jeremy L. Shepherd"});
    },
    
    render: function() {
        let unlogged = (
            <div className="container">
                <div className={"jumbotron text-center " + this.state.shadow} onClick={this.handleShadow}>
                    <h1><span className="fa fa-user" onClick={this.testLoggedIn}></span> User Authentication</h1>
            
                    <p>Login or Register with:</p>
            
                    <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google</a>
                    <a href="/auth/github" className="btn btn-custom-darken"><span className="fa fa-github" alt="github logo"></span> Github</a>
                </div>
            </div>
        );
        
        let logged = (
            <div className="container">
                <div className={"jumbotron text-center " + this.state.shadow} onClick={this.handleShadow}>
                    <h1><span className="fa fa-user" onClick={this.testLoggedIn}></span>{"Hello, " + this.state.displayName + "!"}</h1>
                    <h3>You are now logged in.</h3>
                    <a href="#/logout" className="btn btn-danger"><span className="fa fa-sign-out"></span> Log Out</a>
                </div>
            </div>
        );
        if(this.state.isLoggedIn){
           return <div>{logged}</div>
        }else{
           return <div>{unlogged}</div>
        }
    }
});

module.exports = Jumbotron;