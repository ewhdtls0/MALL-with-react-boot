import React, { useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../../../css/itemWriter.css';
import axios from 'axios';


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
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>분류</td>
                                <td>
                                    <select name="category" onChange={this.handleChange} value={this.state.category}>
                                        <option value="">선택</option>
                                        <option value="clothes">의류</option>
                                        <option value="books">도서</option>
                                        <option value="electronics">전자제품</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>판매 제목</td>
                                <td><input name="title" placeholder="제목" value={this.state.title} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td>판매 내용</td>
                                <td><input name="content" placeholder="내용" value={this.state.content} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td>판매 글쓴이</td>
                                <td><input name="writer" placeholder="글쓴이" value={this.state.writer} onChange={this.handleChange} /></td>
                            </tr>
                            <input multiple="multiple" type="file" onChange={this.fileChange} name="file" />
                        </tbody>
                    </table>
                    <br/>
                    <Button type="submit" variant="secondary">판매 등록</Button>
                </form>
                
            </Router>
        )
    }
}

export default itemWrite;
