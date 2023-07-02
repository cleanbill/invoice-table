import { Invoice, SearchDirection } from '../pages'
import Link from 'next/link'

const Invoices = (props: { table: Array<Invoice>, pageNo: number }) => {
  return (
    <div className="shadow-lg bg-white border-collapse">
      {props.table && props.table.length > 0 &&
        <div>
          <div className='grid grid-cols-6'>
            <div className="table-head grid grid-cols-[1fr,10fr,1fr]">
              <Link className="inline" href={'?pageNo=' + props.pageNo + '&invoiceTotal=' + SearchDirection.NONE + '&invoiceDate=' + SearchDirection.DOWN}>↓</Link>

              <div className='justify-self-center'>Invoice Date</div>
              <Link href={'?pageNo=' + props.pageNo + '&invoiceTotal=' + SearchDirection.NONE + '&invoiceDate=' + SearchDirection.UP}>↑</Link>

            </div>
            <div className="table-head">RS Number</div>
            <div className="table-head">Your Ref</div>
            <div className="table-head">Invoice Number</div>
            <div className="table-head grid grid-cols-[1fr,10fr,1fr]">
              <Link className="inline" href={'?pageNo=' + props.pageNo + '&invoiceTotal=' + SearchDirection.DOWN + '&invoiceDate=' + SearchDirection.NONE}>↓</Link>
              <div>Invoice Total</div>
              <Link href={'?pageNo=' + props.pageNo + '&invoiceTotal=' + SearchDirection.UP + '&invoiceDate=' + SearchDirection.NONE}>↑</Link>
            </div>
            <div className="table-head">Download</div>
          </div>
          {props.table.map((row: Invoice) => (
            <div className='grid grid-cols-6' key={row.invoiceNo}>
              <div>{row.invoiceDate + ""}</div>
              <div className='justify-self-center'>{row.rsOrderNo + ""}</div>
              <div className='justify-self-center'>{row.yourRef}</div>
              <div className='justify-self-end'>{row.invoiceNo}</div>
              <div className='justify-self-end'>{row.invoiceTotal}</div>
              <div className="justify-self-end" >
                <Link className='link' href={'/api/download/' + row.invoiceNo} target='_blank' >Download</Link></div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Invoices
