let result = (function () {

    let call = function (objPost, commandStr) {
        if (commandStr === 'upvote') {

            objPost['upvotes'] += 1;
            return objPost;

        }
        else if (commandStr === 'downvote') {
            objPost['downvotes'] += 1;
            return objPost;
        }
        else if (commandStr === 'score') {
            let upvotes = objPost['upvotes'];
            let downvotes = objPost['downvotes'];
            let totalVotes = upvotes + downvotes;
            let balance = upvotes - downvotes;
            let rating = '';

            if (upvotes / (totalVotes) > 0.66) {
                rating = 'hot'
            }
            else if (balance >= 0 && totalVotes > 100) {
                rating = 'controversial';
            }
            else if (balance < 0) {
                rating = 'unpopular';
            }
            else {
                rating = 'new';
            }

            if (totalVotes < 10) {
                rating = 'new';
            }

            if (totalVotes > 50) {
                let percent = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
                upvotes += percent;
                downvotes += percent;
            }

            return [upvotes, downvotes, balance, rating];
        }

    };

    return {call: call};
}());

var forumPost = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 1,
    downvotes: 0
};

let answer = result.call(forumPost, 'score');
console.log(answer);