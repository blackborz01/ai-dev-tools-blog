import { NextResponse } from 'next/server'
import { apiModels } from '@/data/api-models-complete'

export async function GET() {
  return NextResponse.json({
    success: true,
    count: apiModels?.length || 0,
    hasData: !!apiModels,
    firstModel: apiModels?.[0] || null,
    type: typeof apiModels
  })
}