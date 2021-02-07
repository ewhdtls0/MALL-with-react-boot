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

class ItemUpdate extends Component{

    constructor({props, match}){
        super(props);
        this.state = { id: match.params.id, title: match.params.title, content: match.params.content, category: match.params.category};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        const { id, title, content, category } = this.state;
        event.preventDefault();
        
        axios.put(`/item/write/${id}`, {
            "id": id,
            "title": title,
            "content": content,
            "category": category,
        })
            .then((result) => {
                window.location = "/";
            })
            .catch((error) => {
                console.log(title)
            });

        alert('수정되었습니다');
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
                <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
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
                        </tbody>
                    </table>
                    <br/>
                    <Button type="submit" variant="secondary">수정</Button>
                </form>
                
            </Router>
        )
    }
}

export default ItemUpdate;
