﻿//Anzeige 
const Display = function (canvas) {

    this.buffer = document.getElementById("myCanvas").getContext("2d"),
    this.context = canvas.getContext("2d");

    this.context.canvas.width = window.screen.width
    this.context.canvas.height = 360       // x, y, width, height

    //New Tilesheet Object ==> worldplayer03
    // this.tile_sheet = new Display.TileSheet(32, 50);

    this.drawMap = function (image, image_columns, map, map_columns, tile_size) {

        for (let index = map.lentgh; index >= 0; -- index) {

            let value = map[index];
            let source_x = (value % image_columns) * tile_size;
            let source_y = Math.floor(value / image_columns) * tile_size;
            let destination_x = (index % map_columns) * tile_size;
            let destination_y = Math.floor(index / map_columns) * tile_size;

            this.buffer.drawImage(image, source_x, source_y, tile_size, tile_size, destination_x, destination_y, tile_size, tile_size);

        }

    };

    this.drawObject = function (image, source_x, source_y, destination_x, destination_y, width, height) {

        this.buffer.drawImage(image, source_x, source_y, width, height, Math.round(destination_x), Math.round(destination_y), width, height);

    };

    /***** OLD OLD OLD*****/
    /* This function draws the map to the buffer. */ 
    /*
    this.drawMap = function (map, columns) {

        OLD OLD OLD
        for (let index = map.length ; index >= 0; -- index) {

            let value = map[index];
            let source_x = (value % this.tile_sheet.columns) * this.tile_sheet.tile_size;
            let source_y = Math.floor(value / this.tile_sheet.columns) * this.tile_sheet.tile_size;
            let destination_x = (index % columns) * this.tile_sheet.tile_size;
            let destination_y = Math.floor(index / columns) * this.tile_sheet.tile_size;

            this.buffer.drawImage(this.tile_sheet.image, source_x, source_y, this.tile_sheet.tile_size, this.tile_sheet.tile_size, destination_x, destination_y, this.tile_sheet.tile_size, this.tile_sheet.tile_size);

        }
        





    };
    

    //substitution of DrawRectangle
    this.drawPlayer = function (rectangle, color1, color2) {

        this.buffer.fillStyle = color1;
        this.buffer.fillRect(Math.floor(rectangle.x), Math.floor(rectangle.y), rectangle.width, rectangle.height);
        this.buffer.fillStyle = color2;
        this.buffer.fillRect(Math.floor(rectangle.x + 2), Math.floor(rectangle.y + 2), rectangle.width - 4, rectangle.height - 4);

    };
    */



    //resize

    this.resize = function (width, height, height_width_ratio) {

        if (height / width > height_width_ratio) {

            this.context.canvas.height = width * height_width_ratio;
            this.context.canvas.width = width;

        } else {

            this.context.canvas.height = height;
            this.context.canvas.width = height / height_width_ratio;

        }

        this.context.imageSmoothingEnabled = false;

    };

};

Display.prototype = {

    constructor: Display,

    //Render Funktion jetzt im DisplayPrototype
     render: function () { this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height); },

};

//Display.TileSheet = function (tile_size, columns) {  ==> worldplayer03
//    //Anlegen neues Image
//    this.image = new Image();
//    this.tile_size = tile_size;
//    this.columns = columns;

//};

////Anzeigen TileSheet
//Display.TileSheet.prototype = {};