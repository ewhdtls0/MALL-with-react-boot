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
                                <input name="content" value={this.state.content} onChange={this.handleChange} class="form-control" id="sell_content"/>
                            </tr>
                            <Rule px="3px" />
                            <tr>
                                <label for="sell_writer" className="Jua">판매 글쓴이</label>
                                <br />
                                <label for="sell_writer"><small>판매하시는 분의 성함을 입력해주세요. 근데 여긴 입력이 아니고 자동처리?</small></label>
                                <input name="writer" value={this.state.writer} onChange={this.handleChange} class="form-control" id="sell_writer"/>
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
