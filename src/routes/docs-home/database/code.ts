export const code: string = `import Rayconnect from 'rayconnect-client';
        
const app = new Rayconnect({
    scopes: 'post',
    appID: 'blog',
    space: 'main',
    type: 'micros'
});

app.Query({
    address: 'all',
    scoce: 'post',
    method: 'GET'
}, (response) => { 
    response.send([
        {
            title: 'Hello World!',
            content: 'Welcome To Rayconnect Network!'
        }
    ], true);
});`;