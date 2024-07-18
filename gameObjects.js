AFRAME.registerComponent("bowling-pins", {
    init: function () {
      //starting x position
      posX = -20;
      //starting z-position
      posZ = 85;
  
      for (var i = 0; i < 10; i++) {
        var bowlingPin1 = document.createElement("a-entity");
        var bowlingPin2 = document.createElement("a-entity");
        var bowlingPin3 = document.createElement("a-entity");
        var bowlingPin4 = document.createElement("a-entity");
        var bowlingPin5 = document.createElement("a-entity");
        var bowlingPin6 = document.createElement("a-entity");
        var bowlingPin7 = document.createElement("a-entity");
        var bowlingPin8 = document.createElement("a-entity");
        var bowlingPin9 = document.createElement("a-entity");
        var bowlingPin10 = document.createElement("a-entity");
        
  
        //set x, y and z position
        posX = posX + 5;
        posY = 2.5;
        posZ = posZ - 10;
  
        //scale 
        var scale = { x: 2, y: 2, z: 2 };
  
        //set the id
        bowlingPin1.setAttribute("id", "bowlingPin1" + i);
        bowlingPin2.setAttribute("id", "bowlingPin1" + i);
        bowlingPin3.setAttribute("id", "bowlingPin1" + i);
        bowlingPin4.setAttribute("id", "bowlingPin1" + i);
        bowlingPin5.setAttribute("id", "bowlingPin1" + i);
        bowlingPin6.setAttribute("id", "bowlingPin1" + i);
        bowlingPin7.setAttribute("id", "bowlingPin1" + i);
        bowlingPin8.setAttribute("id", "bowlingPin1" + i);
        bowlingPin9.setAttribute("id", "bowlingPin1" + i);
        bowlingPin10.setAttribute("id", "bowlingPin1" + i);
        
        //set the position
        bowlingPin1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        bowlingPin2.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        bowlingPin3.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        bowlingPin4.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        bowlingPin5.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        bowlingPin6.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        bowlingPin7.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        bowlingPin8.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        bowlingPin9.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        bowlingPin10.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        
        
        //set the scale
        bowlingPin1.setAttribute("scale", scale);
        bowlingPin2.setAttribute("scale", scale);
        bowlingPin3.setAttribute("scale", scale);
        bowlingPin4.setAttribute("scale", scale);
        bowlingPin5.setAttribute("scale", scale);
        bowlingPin6.setAttribute("scale", scale);
        bowlingPin7.setAttribute("scale", scale);
        bowlingPin8.setAttribute("scale", scale);
        bowlingPin9.setAttribute("scale", scale);
        bowlingPin10.setAttribute("scale", scale);
       
        //set the model
        bowlingPin1.setAttribute(
          "gltf-model",
          "./models/bowling_pin/scene.gltf"
        );
        bowlingPin2.setAttribute(
          "gltf-model",
          "./models/bowling_pin/scene.gltf"
        );
        bowlingPin3.setAttribute(
          "gltf-model",
          "./models/bowling_pin/scene.gltf"
        );
        bowlingPin4.setAttribute(
          "gltf-model",
          "./models/bowling_pin/scene.gltf"
        );
        bowlingPin5.setAttribute(
          "gltf-model",
          "./models/bowling_pin/scene.gltf"
        );
        bowlingPin6.setAttribute(
          "gltf-model",
          "./models/bowling_pin/scene.gltf"
        );
        bowlingPin7.setAttribute(
          "gltf-model",
          "./models/bowling_pin/scene.gltf"
        );
        bowlingPin8.setAttribute(
          "gltf-model",
          "./models/bowling_pin/scene.gltf"
        );
        bowlingPin9.setAttribute(
          "gltf-model",
          "./models/bowling_pin/scene.gltf"
        );
        bowlingPin10.setAttribute(
          "gltf-model",
          "./models/bowling_pin/scene.gltf"
        );
  
        bowlingPin1.setAttribute("rotation",{x:0, y:90, z:0})
        //set the physics body
        bowlingPin1.setAttribute("static-body", {});
        bowlingPin2.setAttribute("static-body", {});
        bowlingPin3.setAttribute("static-body", {});
        bowlingPin4.setAttribute("static-body", {});
        bowlingPin5.setAttribute("static-body", {});
        bowlingPin6.setAttribute("static-body", {});
        bowlingPin7.setAttribute("static-body", {});
        bowlingPin8.setAttribute("static-body", {});
        bowlingPin9.setAttribute("static-body", {});
        bowlingPin10.setAttribute("static-body", {});
       
        var sceneEl = document.querySelector("#scene");
        //attach the entity to the scene
        sceneEl.appendChild(bowlingPin1);
        sceneEl.appendChild(bowlingPin2);
        sceneEl.appendChild(bowlingPin3);
        sceneEl.appendChild(bowlingPin4);
        sceneEl.appendChild(bowlingPin5);
        sceneEl.appendChild(bowlingPin6);
        sceneEl.appendChild(bowlingPin7);
        sceneEl.appendChild(bowlingPin8);
        sceneEl.appendChild(bowlingPin9);
        sceneEl.appendChild(bowlingPin10);
      }
    },
  });