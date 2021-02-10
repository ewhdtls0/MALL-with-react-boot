import React, { useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../../../css/itemWriter.css';
import axios from 'axios';

const Rule = ({ px }, { color }) => (
    <hr
      style={{
        borderWidth: px,
      }}
    />
);

class itemWrite extends Component{

    constructor(props){
        super(props);
        this.state = { title: '', content: '', writer: '', category: '', file: null};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fileUpload(file){
        const url = '/upload';
        const formData = new FormData();
        formData.append('file', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config)
    }

    handleSubmit(event){
        const { title, content, writer, category } = this.state;
        event.preventDefault();
        
        axios.post('/item', {
            "title": title,
            "content": content,
            "writer": writer,
            "category": category,
        })
            .then((result) => {
                window.location = "/";
            })
            .catch((error) => {
                console.log(title)
            });
        
        setTimeout(()=> {
            for(let i=0; i<this.state.length; i++){
                event.preventDefault();
                this.fileUpload(this.state.file[i]).then((response) => {
                    console.log(response.data)
                })
            }
        }, 1000)

        alert('등록되었습니다');
    }


    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    fileChange = (e) => {
        this.setState({ file: e.target.files, length: e.target.files.length})
    }

    render(){
        return (
            <Router>
                <br/>
                <div enctype="multipart/form-data">
                    <table>
                        <tbody>
                            <tr>
                                <label className="Nanum">분류</label>
                                <Form.Control as="select" id="sell_category" name="category" onChange={this.handleChange} value={this.state.category} custom>
                                    <option value="">선택</option>
                                    <option value="clothes">의류</option>
                                    <option value="books">도서</option>
                                    <option value="electronics">전자제품</option>
                                </Form.Control>
                            </tr>
                            <Rule px="3px" />
                            <tr>
                                <label for="sell_title" className="Nanum">판매 제목</label>
                                <br />
                                <label for="sell_title"><small>판매 상품의 제목을 입력해 주세요</small></label>
                            </tr>
                            <tr>
                                <input name="title" value={this.state.title} onChange={this.handleChange} class="form-control" id="sell_title"/>
                            </tr>
                            <Rule px="3px" />
                            <tr>
                                <label for="sell_content" className="Nanum">판매 내용</label>
                                <br />
                                <label for="sell_content"><small>판매 상품에 대한 내용을 입력해 주세요</small></label>
                            </tr>
                            <tr>
                                <textarea name="content" value={this.state.content} rows="10" cols="50" onChange={this.handleChange} class="form-control" id="sell_content" onKeyUp={this.EnterNewLine}></textarea>
                            </tr>
                            <Rule px="3px" />
                            <tr>
                                <label for="sell_writer" className="Jua">판매 글쓴이</label>
                                <br />
                                <label for="sell_writer"><small>판매하시는 분의 성함을 입력해주세요</small></label>
                                <input name="writer" value={this.state.writer} onChange={this.handleChange} class="form-control" id="sell_writer"/>
                            </tr>
                            <input multiple="multiple" type="file" onChange={this.fileChange} name="file" />
                        </tbody>
                    </table>
                    <br/>
                    <Button type="submit" variant="secondary" onClick={this.handleSubmit}>판매 등록</Button>
                </div>
                
            </Router>
        )
    }
}

export default itemWrite;
