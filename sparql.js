// 基本区分が古書・古文書を検索
var sparql1 = `
SELECT ?url WHERE{
  ?url rdf:type type:古書・古文書.
}
`;

// ラベルの表示
var sparql2 = `
SELECT ?url ?label WHERE { 
  ?url rdf:type type:古書・古文書.
  ?url rdfs:label ?label.
} 
`;

// 主題・分類・ジャンルの表示
var sparql3 = `
SELECT ?url ?label ?about WHERE { 
  ?url rdf:type type:古書・古文書;
       rdfs:label ?label;
       schema:about ?about.
} 
`;

// 検索結果をフィルタリング
var sparql4 = `
SELECT ?url ?label ?about WHERE { 
  ?url rdf:type type:古書・古文書;
       rdfs:label ?label;
       schema:about ?about.
       FILTER CONTAINS(?label, "名古屋城図")
} 
`;

// 検索結果で並べ替え
var sparql5 = `
SELECT ?url ?label ?about WHERE { 
  ?url rdf:type type:古書・古文書;
       rdfs:label ?label;
       schema:about ?about.
       FILTER CONTAINS(?label, "名古屋城図")
} 
ORDER BY ?label
`;

// 検索結果数の制限
var sparql6 = `
SELECT ?url ?label ?about WHERE { 
  ?url rdf:type type:古書・古文書;
       rdfs:label ?label;
       schema:about ?about.
       FILTER CONTAINS(?label, "名古屋城図")
} 
LIMIT 5
`;


var myquery = sparql1
