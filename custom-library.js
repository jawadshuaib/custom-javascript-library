/*!
 * cQuery JavaScript Library
 * By Jawad Shuaib
 *
 * This library can be customized to create your own
 * libraries/frameworks. 
 * 
 * You can invoke the library with the c$() syntax or specify your own
 * during invocation (see bottom of this file).
 *
 * Date: 2020-12-08
 */
;(function (global, invocations) {        
    "use strict";
    // This little trick makes it easier to construct the obj
    // (i.e. instead of having to call "new Framework ()")
    const Framework = function (selector) {
        return new Framework.init (selector);
    }

    // All methods belonging to the library should be added here.
    // It is best to add all methods outside of the constructor
    // to save memory.
    // Return this to make obj chainable
    Framework.prototype = {
        custom () {            
            console.log ("-- Your Own Method Here --");
            return this;
        },
        rainbow (interval) {
            
            interval = interval || 1000;

            setInterval (() => {
                this.elements.forEach (element => {           
                    element.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 75%)"; //Math.floor(Math.random()*16777215).toString(16);
                });                                       
            }, interval);     

            return this;
        }
    };

    // We don't really need to create the init property. It is just
    // a convention jQuery used in their library as well.
    Framework.init = function (selector) {
        const self = this;

        if (selector === undefined)
            throw `No html selector provided.`;
        else if (!global.document.querySelectorAll(selector).length)
            throw `An element with the name "${selector}" does not exist.`;
        
        self.selector = selector;
        self.elements = global.document.querySelectorAll (selector);
    }

    Framework.init.prototype = Framework.prototype;
    invocations.forEach (invocation => {
        global.Framework = global[invocation] = Framework;
    })

}(typeof window !== "undefined" ? window : this, ['cQuery', 'c$']));