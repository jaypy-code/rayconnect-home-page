export interface IFile {
    name: string
    lang: 'typescript' | 'flutter'
    code: string
}

export const files: IFile[] = [
    {
        name: 'micro.ts',
        lang: 'typescript',
        code: `import Rayconnect from 'rayconnect-client';
        
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
});
`
    },
    {
        name: 'client.ts',
        lang: 'typescript',
        code: ``
    },
    {
        name: 'client.dart',
        lang: 'flutter',
        code: ``
    }
];