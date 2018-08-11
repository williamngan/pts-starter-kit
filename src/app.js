// A demo of convex hull using pts.js. We are using webpack to bundle this demo into "dist/bundle.js".
// Source code licensed under Apache License 2.0.
// Copyright © 2017 William Ngan. (https://github.com/williamngan/pts)

import {CanvasSpace, Create, Polygon} from "pts";


// Initiate Space and Form
var space = new CanvasSpace("#pts").setup({bgcolor: "#09F", resize: true, retina: true});
var form = space.getForm();

let landmarks;

space.add({

  start: (bound) => {
    // Make a face with 30 radial points with slight randomness
    let radius = space.size.minValue().value/3;
    landmarks = Create.radialPts( space.center, radius, 30  );
    landmarks.map( p => p.add( 50*(Math.random() - Math.random()) ) )

  },

  animate: (time, ftime) => {

    landmarks[landmarks.length-1] = space.pointer;

    // convex hull the points
    let hull = Polygon.convexHull( landmarks );

    // eyes' positions
    let left = space.center.$subtract( 50 );
    let right = space.center.$add( 50, -50 );
    let leftB = left.clone().toAngle( space.pointer.$subtract( left ).angle(), 10, left );
    let rightB = right.clone().toAngle( space.pointer.$subtract( right ).angle(), 10, right );

    // draw face and eyes
    form.fillOnly("rgba(255, 255, 255, 0.5)").polygon( hull );
    form.fill("#fff").points( [left, right], 20, "circle" );
    form.fill("#123").points( [leftB, rightB], 5, "circle" );

    // draw the hull and pts
    form.fill("#fff").points( hull, 5, "circle" );
    form.fill("rgba(0,0,0,.5)").points( landmarks, 2, "circle" );
    form.fill("#f03").point( space.pointer, 10, "circle" );

    // draw mouth
    form.strokeOnly("#123", 5).line( [left.$add(0,80), right.$add(0, 80)]);

  },

});


// bind mouse events and play animation
space.bindMouse().bindTouch().play();
