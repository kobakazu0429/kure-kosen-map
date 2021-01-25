import { 外形 } from "./外形";
import { 道路 } from "./道路";
import { 建物 } from "./建物";
import { 駐車場 } from "./駐車場";
import { 駐輪場 } from "./駐輪場";
import { オーバーレイ } from "./オーバーレイ";

export const 呉高専 = [...外形, 道路, 建物, ...駐車場, 駐輪場, オーバーレイ];
export const popuppableLayers = [建物];
