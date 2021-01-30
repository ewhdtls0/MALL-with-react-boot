import React, { useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../../../css/itemWriter.css';
import axios from 'axios';


class itemWrite extends Component{

    constructor(props){
        super(props);
        this.state = { title: '', content: '', writer: '', category: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        const { title, content, writer, category } = this.state;
        event.preventDefault();
        alert('등록되었습니다');

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
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
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
