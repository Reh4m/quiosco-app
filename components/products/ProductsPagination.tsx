import Link from "next/link";

type ProductsPaginationProps = {
  page: number;
};

export default function ProductsPagination({ page }: ProductsPaginationProps) {
  return (
    <nav>
      <Link href={`/admin/products?page=${page + 1}`}></Link>
    </nav>
  );
}
