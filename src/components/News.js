import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Makena Kelly, Joel Khalili",
            "title": "The Crypto Industry Is Helping Trump Pick SEC Chair",
            "description": "The president-elect's transition team is consulting with industry leaders as it vets potential replacements for outgoing chair Gary Gensler, sources tell WIRED.",
            "url": "https://www.wired.com/story/crypto-candidates-front-runners-sec-race/",
            "urlToImage": "https://media.wired.com/photos/6745db10e149b18ca8e2b8d8/191:100/w_1280,c_limit/GettyImages-93181618.jpg",
            "publishedAt": "2024-11-26T16:23:34Z",
            "content": "In July, at a bitcoin conference in Nashville, Tennessee, Trump pledged to fire Gensler if reelected, drawing perhaps the most raucous applause of the night. I will appoint an SEC chair who will buil… [+2635 chars]"
          },
    ]
    constructor(){
        super();
        console.log("Hello I am a constructor from News Components");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className="container my-3">
       <h2>NewsNation - Top Headlines</h2>
       <div className="row">

        <div className="col-md-4">
        <NewsItem title="mytitle" description="mydesc" imageUrl= "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/07d4363d3516471c8895c14605b4da57.jpg" NewsUrl="TODO" />
        </div>

        <div className="col-md-4">
        <NewsItem title="mytitle" description="mydesc"/>
        </div>

        <div className="col-md-4">
        <NewsItem title="mytitle" description="mydesc"/>
        </div>
        
        
      
        </div>
      </div>
    )
  }
}

export default News
