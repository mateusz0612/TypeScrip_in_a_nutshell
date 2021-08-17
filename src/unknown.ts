const str1: any = "example string 1";
const str2: unknown = "example string 2";

// because it's any we are able to call methods that don't exist
str1.someCrazyThings();

// with unknown type we are not able to do things like that
// Property 'someCrazyThings' does not exist on type unknown

str2.someCrazyThings();
