import type { Multilingual } from "../i18n";

// 商品数据类型
export type ProductColumn = {
  value: string | string[] | number;
  remark?: string;
  class?: string;
};

export type Product = {
  [key: string]: ProductColumn;
};

// 定义表格列类型
export type TableColumn = {
  text: string | Multilingual;
  key: string;
  class: string;
};

// 工具函数: 生成产品名链接HTML
export const productName = (name: string, url: string) =>
  `<a href="${url}" title="${name}\n${url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 dark:text-blue-300 hover:underline">${name}</a>`;
// 工具函数: 布尔值文本

export type BoolTextOptions = {
  reverse?: boolean;
  translations?: { yes: string, no: string };
}
export const boolText = (value: boolean, options?: BoolTextOptions) => {
  const defaultOptions = { 
    reverse: false, 
    translations: { yes: "Yes", no: "No" } 
  };
  const mergedOptions: Required<BoolTextOptions> = { 
    ...defaultOptions, 
    ...options || {}, 
    translations: { 
      ...defaultOptions.translations, 
      ...options?.translations || {} 
    } 
  };

  const isPositive = mergedOptions.reverse ? !value : value;
  const textColor = isPositive ? "text-green-800" : "text-red-800";
  const bgColor = isPositive ? "bg-green-100" : "bg-red-100";
  // TODO: remark
  return value
    ? `<span class="${bgColor} ${textColor} text-xs font-medium px-2.5 py-0.5 rounded">${mergedOptions.translations.yes}</span>`
    : `<span class="${bgColor} ${textColor} text-xs font-medium px-2.5 py-0.5 rounded">${mergedOptions.translations.no}</span>`;
};

// 工具函数: 数组文本
export const arrayText = (value: string[], defaultValue: string = "-") => {
  return value.length > 0
    ? value
      .map(
        (v) =>
          `<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">${v}</span>`
      )
      .join(" ")
    : `<span class=" text-gray-500 dark:text-gray-400 text-xs">${defaultValue}</span>`;
};

export const testResult = (
  short: boolean,
  medium: boolean,
  long: boolean,
) => {
  return [['short', short], ['medium', medium], ['long', long]].map(([label, value]) => 
    `<span title="${label}">${value ? '✅' : '❌'}</span> `
  ).join(" ");
};

// 获取表格列配置
export const getTableColumns = (t: (str: string | Multilingual) => string): TableColumn[] => [
  {
    text: t({ en: "Status & Product Name", "zh-cn": "状态 & 产品名称" }),
    key: "name",
    class: "text-left",
  },
  {
    text: t({ en: "Ads", "zh-cn": "是否有广告" }),
    key: "ad",
    class: "text-center",
  },
  {
    text: t({ en: "Free", "zh-cn": "是否免费" }),
    key: "free",
    class: "text-center",
  },
  // {
  //   text: t({ en: "Client", "zh-cn": "客户端" }),
  //   key: "client",
  //   class: "text-center",
  // },
  {
    text: t({ en: "Quality(kbps)", "zh-cn": "音质(kbps)" }),
    key: "quality",
    class: "text-left",
  },
  {
    text: t({ en: "TestResult", "zh-cn": "测试结果" }),
    key: "testResult",
    class: "text-left",
  },
  {
    text: t({ en: "Step", "zh-cn": "步骤" }),
    key: "step",
    class: "text-left",
  },
  // {
  //   text: t({ en: "Remark", "zh-cn": "备注" }),
  //   key: "remark",
  //   class: "text-left",
  // },
  // {
  //   text: t({ en: "Usable", "zh-cn": "是否可用" }),
  //   key: "usable",
  //   class: "text-center",
  // },
];

// 获取产品数据
export const getProducts = (t: (str: string | Multilingual) => string): Product[] => {
  // 翻译词典


  return [
    {
      name: {
        value: productName("✅ https://cobalt.tools", "https://cobalt.tools/"),
      },
      ad: {
        value: boolText(false, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      progress: {
        value: boolText(false, { reverse: false })
      },
      quality: {
        value: arrayText([], "not selectable"),
      },
      step: {
        value: 3,
      },
      testResult: {
        value: testResult(true, true, true),
      },
      remark: {
        value: "You may not be able to use it if you use it continuously, so you can try it several times",
      },
      usable: {
        value: boolText(true, { reverse: false })
      },
    },
    {
      name: {
        value: productName("✅ https://yt8s.com", "https://yt8s.com/en"),
        class: "text-left",
      },
      ad: {
        value: boolText(true, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      progress: {
        value: boolText(true, { reverse: false })
      },
      step: {
        value: 5,
      },
      quality: {
        value: arrayText([], "not selectable"),
      },
      testResult: {
        value: testResult(true, true, true),
      },
      remark: {
        value: "You may not be able to use it if you use it continuously, so you can try it several times",
      },
    },
    {
      name: {
        value: productName(
          "❌ https://app.aiseo.ai",
          "https://app.aiseo.ai/tools/youtube-to-mp3"
        ),
        class: "text-left",
      },
      ad: {
        value: boolText(false, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      progress: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText(["64", "128", "192", "256", "320"]),
      },
      usable: {
        value: boolText(true, { reverse: false })
      },
    },
    {
      name: {
        value: productName(
          "✅ https://www.macelleriamantelli.it",
          "https://www.macelleriamantelli.it/"
        ),
        class: "text-left",
      },
      ad: {
        value: boolText(true, { reverse: true }),
        remark: "Click Download to be redirected to the ad page"
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText(["64", "128", "192", "256", "320"]),
      },
      progress: {
        value: boolText(false, { reverse: false })
      },
      step: {
        value: 4,
      },
      testResult: {
        value: testResult(true, true, true),
      },
      usable: {
        value: boolText(true, { reverse: false })
      },
    },
    {
      name: {
        value: productName("✅ https://yt1d.com", "https://yt1d.com/en20/youtube-to-mp3"),
        class: "text-left",
      },
      ad: {
        value: boolText(true, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText([], "not selectable"),
      },
      progress: {
        value: boolText(false, { reverse: false })
      },
      step: {
        value: 5,
      },
      testResult: {
        value: testResult(true, true, true),
      },
      usable: {
        value: boolText(true, { reverse: false })
      },
    },
    {
      name: {
        value: productName("villamadame", "https://www.villamadame.it/"),
        class: "text-left",
      },
      ad: {
        value: boolText(true, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText(["64", "128", "256", "320"]),
      },
      usable: {
        value: boolText(true, { reverse: false })
      },
    },
    {
      name: {
        value: productName(
          "clipto",
          "https://www.clipto.com/media-downloader/free-youtube-to-mp3-converter"
        ),
        class: "text-left",
      },
      ad: {
        value: boolText(false, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText(["m4a", "opus", "mp3"]),
      },
      usable: {
        value: boolText(true, { reverse: false })
      },
    },
    {
      name: {
        value: productName("cnvmp3", "https://cnvmp3.com/v23"),
        class: "text-left",
      },
      ad: {
        value: boolText(false, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText(["64", "128", "256", "320"]),
      },
      usable: {
        value: boolText(true, { reverse: false })
      },
    },
    {
      name: {
        value: productName("ytmp3", "https://ytmp3.cc/Nnht/"),
        class: "text-left",
      },
      ad: {
        value: boolText(true, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText(["128"]),
      },
      usable: {
        value: boolText(true, { reverse: false })
      },
    },
    {
      name: {
        value: productName("y2mate", "https://y2mate.nu/en-c3pn/"),
        class: "text-left",
      },
      ad: {
        value: boolText(false, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText(["128"]),
      },
      usable: {
        value: boolText(false, { reverse: false })
      },
    },
    {
      name: {
        value: productName("y2mate", "https://www.y2mate.com/en949"),
      },
      ad: {
        value: boolText(true, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText(["128"]),
      },
      usable: {
        value: boolText(false, { reverse: false })
      },
    },
    {
      name: {
        value: productName("yout", "https://yout.com/"),
        class: "text-left",
      },
      ad: {
        value: boolText(false, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText([
          "32",
          "64",
          "128",
          "192",
          "256",
          "320",
        ]),
      },
      usable: {
        value: boolText(true, { reverse: false })
      },
    },
    {
      name: {
        value: productName("youtubemp3", "https://youtubemp3.one/"),
      },
      ad: {
        value: boolText(true, { reverse: true }),
      },
      client: {
        value: boolText(false, { reverse: true }),
      },
      free: {
        value: boolText(true, { reverse: false })
      },
      quality: {
        value: arrayText(["32"]),
      },
      usable: {
        value: boolText(false, { reverse: false })
      },
    },
  ];
}; 