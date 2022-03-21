const NavigationSidebar = (active) => {
  return(`
        
        <div class="list-group">
            <a class="list-group-item list-group-item-action disabled"><i class="fa-brands fg-color-white fa-twitter"></i></a>
            <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-house-chimney fg-color-lightgrey"></i>
              Home</a>  
            <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action active">
              <i class="fa-solid fa-hashtag fg-color-lightgrey"></i>
              Explore</a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-bell fg-color-lightgrey"></i>
              Notification</a>  
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-envelope fg-color-lightgrey"></i>
              Messages</a>  
            <a href="bookmarks.html" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-bookmark fg-color-lightgrey"></i>
              Bookmark</a>  
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-list fg-color-lightgrey"></i>
              Lists</a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-user fg-color-lightgrey"></i>
              Profile</a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-circle"></i>
              More</a>            
          </div>

        

        <div class="d-grid mt-2">
            <a href="index.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>
    `);
}

export default NavigationSidebar;