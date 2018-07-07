function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let postDescription = super.toString() + '\n';
            let socialStats = `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length !== 0) {
                socialStats += `\nComments:\n * ${this.comments.join('\n * ')}`;
            }
            return postDescription + socialStats;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }


    return {Post, SocialMediaPost, BlogPost};
}


let classes = solution();

let Post = classes.Post;
let SocialMediaPost = classes.SocialMediaPost;
let BlogPost = classes.BlogPost;

let postA = new Post('Title', 'Content');
let socialMediaPostA = new SocialMediaPost('Title', 'Content', 9, 0);
let blogPostA = new BlogPost('Title', 'Content', 1);
socialMediaPostA.addComment('First comment');
socialMediaPostA.addComment('Second comment');
console.log(socialMediaPostA.toString());
console.log('-------------------------------------');
console.log(blogPostA.toString());
let returnedPost = blogPostA.view();
console.log('-------------------------------------');
returnedPost.views = 10;
returnedPost.title = 'Another title';
console.log(blogPostA.toString());



