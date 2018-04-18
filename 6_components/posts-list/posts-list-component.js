function PostsListCtrl(mainSvc){
  let vm = this;

  mainSvc.getPosts().then(function(response){
    vm.posts = response.data;
  });
}

app.component('postsList', {
  templateUrl: 'posts-list/posts-list.html',
  controller: PostsListCtrl,
  controllerAs: 'vm'
})
