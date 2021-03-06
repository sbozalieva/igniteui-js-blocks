import { Component } from "@angular/core";
import { CarouselModule } from "../../src/carousel/carousel";

@Component({
    selector: "carousel-sample",
    template:`
        <h3>Carousel</h3>
        <div style="width: 100%;">
            <ig-carousel [interval]="interval" [pause]="pause" [loop]="loop">
                <ig-slide *ngFor="let slide of slides;" [active]="slide.active">
                    <img [src]="slide.image">
                </ig-slide>
            </ig-carousel>
        </div>
    `
})
export class CarouselSampleComponent {
    slides: Array<any> = [];
    interval = 3000;
    pause = true;
    loop = true;

    constructor() {
            this.addNewSlide();
    }

    addNewSlide() {
        this.slides.push(
            {image: "https://unsplash.it/g/1170/300"},
            {image: "https://unsplash.it/g/1171/300"},
            {image: "https://unsplash.it/g/1172/300"},
            {image: "https://unsplash.it/g/1173/300"}
        );
    }
}