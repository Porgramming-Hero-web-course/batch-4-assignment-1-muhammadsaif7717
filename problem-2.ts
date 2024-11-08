{
    /// Problem 2 ///

    function removeDuplicates(arr: number[]): number[] {
        return Array.from(new Set(arr));
    }

    // Sample Input:
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

    // Sample Output:
    [1, 2, 3, 4, 5]

    ///
}