// This file is used to refresh the TypeScript types in the project
/***
 * Simple Types
 * 
 * There are three main primitives in JavaScript and TypeScript.
 * 
 * boolean - true or false values
 * number - whole numbers and floating point values
 * string - text values like "TypeScript Rocks"
 * 
 * There are also 2 less common primitives used in later versions of Javascript and TypeScript.
 * 
 * bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
 * symbol - used to create a globally unique identifier.
 * --------------------------------------------------------------------
 * TYPE ASSIGNMENT
 * 
 * Explicit , Implicit
 * 
 * let firstName: string = "Dylan"; // Explicit
 * let lastName = "Smith"; // Implicit
 * 
 * let firstName: string = "Dylan"; // type string
 * firstName = 33; // attempts to re-assign the value to a different type
 * --------------------------------------------------------------------
 * 
 * SPECIAL TYPES
 * 
 * any - allows any type of value to be assigned to it.
 * unknown - allows any type of value to be assigned to it, but requires type checking before it can be used.
 * never - used to indicate that a value will never be produced.
 * 
 * let v: any = true;
 * v = "string"; // no error as it can be "any" type
 * Math.round(v); // no error as it can be "any" type   
 * 
 * let v: unknown = true;
 * v = "string"; // error as it can be "unknown" type
 * Math.round(v); // error as it can be "unknown" type
 * 
 * unknown is a similar type to any but safer than any.
 * --------------------------------------------------------------------
 * 
 *  ARRAYS
 *  const names: string[] = [];
 *  names.push("Dylan"); // no error
 *  names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
 * 
 *  the readonly keyword can be used to make an array immutable.
 *  const names: readonly string[] = ["Dylan", "Tyler"];
 * 
 * --------------------------------------------------------------------
 * 
 * TUPLES
 * A tuple is a typed array with a pre-defined length and types for each index.
 * 
 * Tuples are great because they allow each element in the array to be a known type of value.
 * 
 * const person: [string, number] = ["Dylan", 33];
 * 
 * person[0] = "Tyler"; // no error
 * person[1] = "Smith"; // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
 * 
 * let ourTuple: [number, boolean, string];
 * ourTuple = [5, true, "Hello"]; // no error
 * 
 * destruction tuples 
 * 
 * const graph: [number, number] = [55.2, 41.3];
 * const [x, y] = graph;
 * 
 * console.log(x, y); // 55.2, 41.3
 * --------------------------------------------------------------------
 * 
 * OBJECTS
 * 
 * const car: { type: string, model: string, year: number } = {
 *  type: "Toyota",
 *  model: "Corolla",
 *  year: 2009
 * };
 * 
 * optional properties
 * 
 * const car: { type: string, model: string, year: number, optionalProperty?: string } = {
 *  type: "Toyota",
 *  model: "Corolla",
 *  year: 2009
 * };
 * 
 * --------------------------------------------------------------------
 * 
 * ENUMS        
 * 
 * Enums allow us to define a set of named constants. We can then use these constants in our code.
 * 
 * enum Color {
 *  Red,
 *  Green,
 *  Blue
 * }
 * 
 * let myColor: Color = Color.Red;
 * 
 * console.log(myColor); // 0
 * 
 * numeric enums 
 * 
 * enum Color {
 *  Red = 1,
 *  Green = 2,
 *  Blue = 4
 * }
 * 
 * let myColor: Color = Color.Red;
 * 
 * console.log(myColor); // 1
 * 
 * fully initialized enums
 * 
 * enum StatusCodes {
 *  NotFound = 404,
 *  Success = 200,
 *  Accepted = 202,
 *  BadRequest = 400
 * }
 * 
 * let httpStatus: StatusCodes = StatusCodes.NotFound;
 *  
 * console.log(httpStatus); // 404
 * 
 * string enums
 * 
 * enum Direction { 
 *  Up = "UP",
 *  Down = "DOWN",
 *  Left = "LEFT",
 *  Right = "RIGHT"
 * }
 * 
 * let myDirection: Direction = Direction.Up;
 * 
 * console.log(myDirection); // UP
 * 
 * 
 * --------------------------------------------------------------------
 * 
 * Type Aliases and Interfaces
 * 
 * Type aliases create a new name for a type.
 * type CarYear = number;
 * type CarType = string;
 * type CarModel = string;
 * 
 * type Car = {
 *  year: CarYear,
 *  type: CarType,
 *  model: CarModel
 * }
 * 
 * let myCar: Car = {
 *  year: 2009,
 *  type: "Toyota",
 *  model: "Corolla"
 * }
 * 
 * interfaces are similar to type aliases, except they also have the ability to describe the shape of an object.
 * 
 * interface Rectangle {
 *  height: number;
 *  width: number;
 * }
 * 
 * let myRectangle: Rectangle = {
 *  height: 10,
 *  width: 20
 * }
 * 
 * extending interfaces
 * 
 * Extending an interface means you are creating a new interface with the same 
 * properties as the original, plus something new.
 * 
 * interface Rectangle {
 *  height: number;
 *  width: number;
 * }
 * 
 * interface ColoredRectangle extends Rectangle {
 *  color: string;
 * }
 * 
 * let myRectangle: ColoredRectangle = {
 *  height: 10,
 *  width: 20,
 *  color: "red"
 * }
 * 
 * --------------------------------------------------------------------
 */

export default function TypeScriptRefresher(){
    const car:{ type: string, model: string, year: number, mileage?: number} = {
        type: "Toyota",
        model: "Corolla",
        year: 2009
    }

    car.mileage = 10000;

    console.log(car);
}

