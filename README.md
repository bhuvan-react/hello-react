
# HELLO REACT

# Project Structure

/**
 *
 * Header
 *   - Logo
 *   - MenuItems/NavItems
 *   - Cart
 * Body
 *   - Search
 *   - RestaruantContainer
 *         -RestaruantCard
 * Footer
 *   - Copyrights
 *   - SM Links
 *   - Address
 *   - Contact us
 *
 */

 Two types of export/import 

 1. Default 

        export default Component;
        import Component from "path"

 2. Named

        export const Component
        import {Component} from "path"


# React Hooks

    Normal Utility functions.
        1. useState
        2. useEffect

    whenever a state variable changes React my re-rendering the component.
    React is good at DOM manipulations. This is the core logic of React

# Single Responsibilty Principle.

    - More reusable
    - More maintainable
    - More Testable

# Custom Hooks

    - utitlty functions (normal functions)
    we will take out some responisbilty from a component and extract in a hook called custom hook
