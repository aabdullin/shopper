import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

class Reddit extends React.Component {
  state = {
    posts: [],
    error: undefined,
    isLoading: false,
  };

  componentDidMount() {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        axios
          .get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
          .then((res) => {
            const posts = res.data.data.children.map((obj) => obj.data);
            this.setState({ posts, error: undefined, isLoading: false });
          })
          .catch((error) => {
            this.setState({ error, isLoading: false });
          });
      }
    );
  }

  render() {
    const { posts } = this.state;

    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <h1> {`/r/${this.props.subreddit}`} </h1>
        {this.state.error && <div> Something is wrong </div>}
        <div>
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="body">
                <a href={post.url} rel="noreferrer">
                  <div className="title"> {post.title} </div>
                </a>
                <div className="submitted">
                  Submitted by <div className="author"> {post.author} </div>{" "}
                </div>
                <div className="comments">
                  {" "}
                  {post.num_comments}{" "}
                  <div className="actions">
                    {" "}
                    comments share save hide report{" "}
                  </div>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Reddit subreddit="reactjs" />,
  document.querySelector("#root")
);
