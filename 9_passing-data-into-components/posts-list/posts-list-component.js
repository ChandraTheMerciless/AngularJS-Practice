function PostsListCtrl(mainSvc){
  let vm = this;

  // mainSvc.getPosts().then(function(response){
  //   vm.posts = response.data;
  // });
}

app.component('postsList', {
  templateUrl: 'posts-list/posts-list.html',
  controller: PostsListCtrl,
  controllerAs: 'vm',
  bindings: {
    posts: '<' // < denotes a single one-way binding. = denotes two-way, and & denotes a function being passed in
  }
})
