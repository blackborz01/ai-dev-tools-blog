import React, { memo } from 'react'
import { Table } from 'lucide-react'

interface TableColumn {
  header: string
  key: string
  align?: 'left' | 'center' | 'right'
}

interface ComparisonTableProps {
  title?: string
  columns: TableColumn[]
  data: Record<string, any>[]
  highlightFirst?: boolean
}

const ComparisonTable = memo(({ title, columns, data, highlightFirst = false }: ComparisonTableProps) => {
  return (
    <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20 mb-8">
      {title && (
        <div className="flex items-center justify-center gap-2 mb-6">
          <Table className="w-5 h-5 text-cyan-400" />
          <h4 className="text-xl font-bold text-center text-cyan-400">{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`py-3 px-4 text-gray-400 ${
                    col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className={`py-3 px-4 ${
                      colIndex === 0 && highlightFirst ? 'font-bold' : ''
                    } ${
                      col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
})

ComparisonTable.displayName = 'ComparisonTable'

export default ComparisonTable