/* jslint node: true */

"use strict";

describe( "toBeSameMomentAs matcher:", function() {
    var moment = require( "moment" );

    var matcher = require( "../lib/toBeSameMomentAs" );

    it( "returns true if the two moments are the same object", function() {
        var m = moment();
        var match = matcher().compare( m, m );

        expect( match.pass ).toBe( true );
    } );

    it( "returns true if the two moments are equal but distinct objects", function() {
        var momentFromISOString = moment( "2015-12-11T12:04:23+0530" );
        var momentFromDate = moment( new Date( "Fri Dec 11 2015 12:04:23 GMT+0530 (IST)" ) );

        var match = matcher().compare( momentFromISOString, momentFromDate );

        expect( match.pass ).toBe( true );
    } );
} );
