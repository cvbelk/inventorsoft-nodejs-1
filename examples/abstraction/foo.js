class Foo {
    constructor(text) {
        this._text = text;
    }

    /**
     * Implementation optional
     */
    genericMethod() {
        console.log('running from super class. Text: ' + this._text);
    }

    /**
     * Implementation required
     */
    doSomething() {
        throw new Error('You have to implement the method doSomething!');
    }

}
export default Foo;