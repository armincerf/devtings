import fs from 'fs'
import { join } from 'path'
import { Category } from '../types/category'

const categoryDir = join(process.cwd(), '_resultData')

export function getCategorySlugs() {
  return fs.readdirSync(categoryDir)
}

export function getCategoryBySlug(slug) {
  const realSlug = slug.replace(/\.json$/, '')
  
  const fullPath = join(categoryDir, `${realSlug}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const data = JSON.parse(fileContents)

  return data
}

export function getAllCategories(): Category[] {
  const slugs = getCategorySlugs()
  const categories = slugs
    .map((slug) => getCategoryBySlug(slug))
  
  return categories
}