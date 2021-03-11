var APP_DATA = {
  "scenes": [
    {
      "id": "0-the-pals-kitchen-entry",
      "name": "The Pals Kitchen Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.015661459811486367,
        "pitch": -0.006555081346320435,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.1047407720720166,
          "pitch": 0.1641649375556824,
          "rotation": 0,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.0168559002937254,
        "pitch": 0.2559976466126592,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 2.956719091813963,
          "pitch": 0.3679607367946751,
          "rotation": 0,
          "target": "2-hotspot-2"
        },
        {
          "yaw": -0.15501344518010995,
          "pitch": 0.2949896071146618,
          "rotation": 0,
          "target": "0-the-pals-kitchen-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hotspot-2",
      "name": "Hotspot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.43717631790863365,
        "pitch": 0.5015683411332716,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.23489591838639257,
          "pitch": 0.367479859716795,
          "rotation": 0,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
