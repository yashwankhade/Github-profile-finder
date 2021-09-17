// avatar_url: "https://avatars.githubusercontent.com/u/62610699?v=4"
// bio: "Third Year CSE Student"
// blog: ""
// company: null
// created_at: "2020-03-24T15:42:25Z"
// email: null
// events_url: "https://api.github.com/users/yashwankhade/events{/privacy}"
// followers: 9
// followers_url: "https://api.github.com/users/yashwankhade/followers"
// following: 10
// following_url: "https://api.github.com/users/yashwankhade/following{/other_user}"
// gists_url: "https://api.github.com/users/yashwankhade/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/yashwankhade"
// id: 62610699
// location: "Pune, India"
// login: "yashwankhade"
// name: "Yash Wankhade"
// node_id: "MDQ6VXNlcjYyNjEwNjk5"
// organizations_url: "https://api.github.com/users/yashwankhade/orgs"
// public_gists: 0
// public_repos: 26
// received_events_url: "https://api.github.com/users/yashwankhade/received_events"
// repos_url: "https://api.github.com/users/yashwankhade/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/yashwankhade/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/yashwankhade/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2021-09-11T17:42:58Z"
// url: "https://api.github.com/users/yashwankhade"



let name = document.querySelector('#name');
let created_at = document.querySelector('#created_at');
let followers = document.querySelector('#followers');
let following = document.querySelector('#following');
let num_repos = document.querySelector('#num_repos');
let avatar = document.querySelector('#avatar');


let form = document.querySelector('#form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let user = form[0].value;
    profile(user);
    get_repos(user);
})


async function profile(username){
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    let user_info = data;
    name.innerHTML = `${user_info.name}<br>created at:${user_info.created_at.substring(0,10)}`;
    created_at.innerText = user_info.created_at;
    followers.innerText = `Followers:${user_info.followers}`;
    // followers.innerHTML = `<p>Followers:${user_info.followers}<h3>`;
    // followers.innerHTML = `<p>Followers:${user_info.followers}<h3>`;
    // followers.innerHTML = `<p>Followers:${user_info.followers}<h3>`;
    // followers.innerHTML = `<p>Followers:${user_info.followers}<h3>`;
   
}

// profile();

async function get_repos(username){
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();
    let repos = data;

    repos.forEach(repo=>{
        console.log(repo.name)
    })
}