// graph is a finite set of nodes connected together by edges
// two main ways of representing graphs are
// adjancy list and adjancy matrix
// below is an implementation of graph using adjancy list
// [[1,2],[5,1],[2,0],[0,1],[5,1],[0,1]] 
// the example above means vertex 
// 0 -> 1,2 vertex 0 is a neighbour or is connected to vertex 1 and vertex 2
// 1 -> 5,1
// 2 -> 2,0 
//etc

function Vertex(data) {
    this.data = data
}

function Graph(v) {
    this.vertices = v
    this.edges = 0
    this.adj = [] // list of adjacent vertices
    this.visited = []
    for (let i =0; i < this.vertices; i++) {
        this.adj[i] = []
        this.visited[i] = false
    }
    this.addEdge = addEdge
    this.showGraph = showGraph
    this.dfs = dfs
    this.bfs = bfs
}

function addEdge(v,w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
}

function showGraph() {
    for (let i = 0; i < this.vertices; i++) {
        process.stdout.write(i + '-->' )
        for (let j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] !== undefined) {
                process.stdout.write(this.adj[i][j] + ' ')
            }
        }
        console.log("")
    }
}

// search by going through a vertex from start to end
// then backtrack and go through the next vertex also from start to end
// repeat process for each vertex
function dfs(v) {
    this.visited[v] = true
    if (this.adj[v] !== undefined) console.log('visited vertex ' + v)
    for(let i in this.adj[v]) {
        let w = this.adj[v][i]
        if (!this.visited[w]) this.dfs(w)
    }
}

//performs search layer by layer
function bfs(v) {
    const queue = []
    this.visited[v] = true
    queue.push(v)   

    while (queue.length > 0) {
        let v = queue.shift()
        console.log('visited vertex ' + v)
        let neighbours = this.adj[v]
        for (let i in neighbours) {
            w = neighbours[i]
            if (!this.visited[w]) {
                queue.push(w)
                this.visited[w] = true
            }
        }
    }
}


g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
// g.bfs(0)
// g.dfs(0)
// g.showGraph()