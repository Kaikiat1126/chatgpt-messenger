import type { NextApiRequest, NextApiResponse } from 'next'
import openai from '../../lib/chatGPT'

type Option = {
    value: string,
    label: string
}

type Data = {
    modelOptions: Option[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    //res.data.data 会返回包含所有模型信息的数组
    const models = await openai.listModels().then(res => res.data.data);

    const modelOptions = models.map((model) => ({
        value: model.id,
        label: model.id
    }));

    res.status(200).json({ modelOptions })
}