import { Component } from '@angular/core';
import { TweenMax } from "gsap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'market-data';
  private mouseCursor = null;
  private mouseCursorSmall = null;
  private wideLabel = null;
  constructor() {
    //Circles for the cursor
    this.mouseCursor = document.querySelector(".cursor");
    this.mouseCursorSmall = document.querySelector(".cursorSmall");
    this.wideLabel = document.querySelector(".WideLabel");
    this.cursor = this.cursor.bind(this);
    this.cursorSmall = this.cursorSmall.bind(this);
    window.addEventListener("mousemove", this.cursor);
    window.addEventListener("mousemove", this.cursorSmall);
  }

  private cursorSmall(e) {
    TweenMax.to(this.mouseCursorSmall, .5, {
      x: e.pageX,
      y: e.pageY - 10
    })
  }


  private cursor(e) {
    this.mouseCursor.style.top = e.pageY + "px";
    this.mouseCursor.style.left = e.pageX + "px";
    if (!this.wideLabel) {
      this.wideLabel = document.querySelector(".WideLabel");
      this.wideLabel.addEventListener("mouseover", () => {
        TweenMax.to(this.mouseCursor, .5, {
          width: "4rem",
          height: "4rem"
        })
      });
      this.wideLabel.addEventListener("mouseleave", () => {
        TweenMax.to(this.mouseCursor, .5, {
          width: "2rem",
          height: "2rem"
        })
      });
    }
    
  }
}
