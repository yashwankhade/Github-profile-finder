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
let card = document.querySelector('.card');

let form = document.querySelector('#form');

form.addEventListener('submit',(e)=>{
   
    e.preventDefault();
    card.style.visibility="hidden"
    document.querySelector('.repo').innerHTML=" ";
    let user = form[0].value;
    profile(user);
    get_repos(user);
})


async function profile(username){
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    let user_info = data;
    if(data.message==="Not Found"){
        card.style.visibility="hidden"
        alert("Invalid username");

    }
    else{
    if(user_info.name===null){
         name.innerHTML="";
    }
    else{
    name.innerHTML = `${user_info.name}<br><a href="${user_info.html_url}">${user_info.login}</a>`;
    }
    avatar.setAttribute('src', user_info.avatar_url)
    followers.innerHTML = `Followers:${user_info.followers}`;
    following.innerHTML = `Following:${user_info.following}`;
    num_repos.innerHTML = `Number of repositories:${user_info.public_repos}`;
    card.style.visibility="visible"
}
}

// profile();

async function get_repos(username){
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();
    let repos = data;
    repos.innerHTML="";
    
    repos.forEach(repo=>{
        let repos = document.querySelector('.repo'); 
        const link = document.createElement('a');
        link.setAttribute('href',`${repo.html_url}`);
        const button = document.createElement('button');
        button.innerText=`${repo.name}`;
        link.appendChild(button);
        
        // let repo_card = `
        //     <a href="${repo.html_url}"><button>${repo.name}</button></a>
        // `;
          
        repos.appendChild(link);
        
        // repos.append(repo_card.innerHTML);
        console.log(repo)
    })
}