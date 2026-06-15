declare module "*.asset.json" {
  const value: { url: string; asset_id: string; [k: string]: unknown };
  export default value;
}