import React, { Component } from 'react';

class imgUpload extends Component {

    state = {
        pictures: [],
    }

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        console.log(event.target.value)
        this.state.pictures.push(event.target.value);

    }

    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.pictures);
        e.preventDefault();
    }

    render() {
        return (
            <form method="post" encType="multipart/form-data" action="/upload" onSubmit={this.handleSubmit}>
                <input type="file" value={this.state.value} onChange={this.handleChange} accept="image/*" capture="camera" multiple />
                <input type="submit" value="submit" />
                {/* <canvas className="photo" ref={(c) => this.context = c.getContext('2d')}  ></canvas> */}
                {/* <video className="player" ref={this.myRef} onCanPlay={this.paintToCanvas}></video> */}
            </form>
        )
    }
}

export default imgUpload;