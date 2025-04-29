import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';

@Component({
  standalone: true,
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.slice(0, 5);
    });
  }
}
