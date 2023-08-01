type Todo = {
  userId: 1;
  id: 1;
  title: "delectus aut autem";
  completed: false;
};

type ErrorProps = { error: Error; reset: () => void };

type User = {
  id: 1;
  name: "Leanne Graham";
  username: "Bret";
  email: "Sincere@april.biz";
  address: {
    street: "Kulas Light";
    suite: "Apt. 556";
    city: "Gwenborough";
    zipcode: "92998-3874";
    geo: {
      lat: "-37.3159";
      lng: "81.1496";
    };
  };
  phone: "1-770-736-8031 x56442";
  website: "hildegard.org";
  company: {
    name: "Romaguera-Crona";
    catchPhrase: "Multi-layered client-server neural-net";
    bs: "harness real-time e-markets";
  };
};

type Result = {
  type: "standard";
  title: "Hello";
  displaytitle: "<i>Hello</i>";
  namespace: {
    id: 0;
    text: "";
  };
  wikibase_item: "Q98815142";
  titles: {
    canonical: "Hello";
    normalized: "Hello";
    display: "<i>Hello</i>";
  };
  pageid: 6710844;
  thumbnail: {
    source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/TelephoneHelloNellie.jpg/320px-TelephoneHelloNellie.jpg";
    width: 320;
    height: 545;
  };
  originalimage: {
    source: "https://upload.wikimedia.org/wikipedia/commons/b/b3/TelephoneHelloNellie.jpg";
    width: 483;
    height: 822;
  };
  lang: "en";
  dir: "ltr";
  revision: "1166178471";
  tid: "5de3abf0-2d41-11ee-9afd-51599c940b6b";
  timestamp: "2023-07-19T21:17:27Z";
  description: "Salutation or greeting";
  description_source: "local";
  content_urls: {
    desktop: {
      page: "https://en.wikipedia.org/wiki/Hello";
      revisions: "https://en.wikipedia.org/wiki/Hello?action=history";
      edit: "https://en.wikipedia.org/wiki/Hello?action=edit";
      talk: "https://en.wikipedia.org/wiki/Talk:Hello";
    };
    mobile: {
      page: "https://en.m.wikipedia.org/wiki/Hello";
      revisions: "https://en.m.wikipedia.org/wiki/Special:History/Hello";
      edit: "https://en.m.wikipedia.org/wiki/Hello?action=edit";
      talk: "https://en.m.wikipedia.org/wiki/Talk:Hello";
    };
  };
  extract: "Hello is a salutation or greeting in the English language. It is first attested in writing from 1826.";
  extract_html: "<p><i><b>Hello</b></i> is a salutation or greeting in the English language. It is first attested in writing from 1826.</p>";
};
