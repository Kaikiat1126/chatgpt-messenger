import openai from "./chatGPT";

const query = async (prompt: string, chatID: string, model: string) => {
    console.log("Querying ChatGPT");
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    .then(res => res.data.choices[0].text)
    .catch(err => `ChatGPT Error: ${err.message}`);

    console.log("ChatGPT Response: ", res);
    
    return res;
}

// const query = async (prompt: string, chatID: string, model: string) => {
//     console.log("Querying ChatGPT");
//     return "Hello World";
// }

export default query;