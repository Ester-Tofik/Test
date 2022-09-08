

interface INode {
    name: string;
    children: INode[];
}


const findIndexOfInode=(root :INode,index: number)=> {
    let Inodes: Array<INode> = [];
    while (Inodes.length < index) {
        let i = 0;
        Inodes.push(root);
        for (let i = 0; i < root.children.length; i++) {
            Inodes.push(root.children[i]);
        }
        i++;
        root = Inodes[i]
    }
    //call to print function
     Print(Inodes[index - 1]);
     //PrintRecursive(Inodes[index - 1])
   
}

//print not recursively
const Print= (parent: INode) => {
    if (parent === null){
        return;
    }
    let children: Array<INode> = [];
    let indexOfInode = 0;
    children.push(parent);
    console.log(parent.name);
    while (parent) {
        for (let i = 0; i < parent.children.length; i++) {
            console.log(parent.children[i].name);
        }
        indexOfInode++;
        parent = children[indexOfInode];
    }
}

//print recursively
const PrintRecursive = (parent: INode) => {
    if (parent === null)
        return;
    for (let i = 0; i < parent.children.length; i++) {
        PrintRecursive(parent.children[i]);
        console.log(parent.children[i].name);
    }

}

 /*
Sometimes we prefer using Iterative over recursive function because it requires lots of memory
and it is usually slower due to the overhead of maintaining the stack.
but Recursion obviously has advantages, Performs better in solving problems based on tree structures.
Recursion adds clarity and reduces the time needed to write and debug code.
 */

















