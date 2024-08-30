import os
import hashlib
import argparse
from collections import defaultdict
from typing import List, Tuple

def find_duplicate_files(directory: str) -> List[Tuple[str, List[str]]]:
    """
    Find duplicate files in the given directory based on their content.

    Args:
    directory (str): The path to the directory to search for duplicates.

    Returns:
    List[Tuple[str, List[str]]]: A list of tuples, where each tuple contains
    a checksum and a list of file paths with that checksum.
    """
    checksums = defaultdict(list)

    for root, _, files in os.walk(directory):
        for filename in files:
            filepath = os.path.join(root, filename)
            file_hash = calculate_file_hash(filepath)
            checksums[file_hash].append(filepath)

    # Filter out unique files and sort the result
    duplicates = sorted(
        [(checksum, paths) for checksum, paths in checksums.items() if len(paths) > 1],
        key=lambda x: x[0]
    )

    return duplicates

def calculate_file_hash(filepath: str, block_size: int = 65536) -> str:
    """
    Calculate the SHA256 hash of a file.

    Args:
    filepath (str): The path to the file.
    block_size (int): The size of each block to read from the file.

    Returns:
    str: The hexadecimal representation of the file's SHA256 hash.
    """
    hasher = hashlib.sha256()
    with open(filepath, 'rb') as file:
        for block in iter(lambda: file.read(block_size), b''):
            hasher.update(block)
    return hasher.hexdigest()

def print_duplicate_files(duplicates: List[Tuple[str, List[str]]]) -> None:
    """
    Print the list of duplicate files in a readable format.

    Args:
    duplicates (List[Tuple[str, List[str]]]): The list of duplicate files.
    """
    if not duplicates:
        print("No duplicate files found.")
    else:
        print("Duplicate files found:")
        for checksum, file_list in duplicates:
            print(f"\nChecksum: {checksum}")
            for file_path in file_list:
                print(f"  - {file_path}")

def main():
    parser = argparse.ArgumentParser(description="File operations helper")
    parser.add_argument("directory", help="Directory path to process")
    parser.add_argument("--check-duplicates", action="store_true", help="Check for duplicate files")
    
    args = parser.parse_args()

    if not os.path.isdir(args.directory):
        print(f"Error: '{args.directory}' is not a valid directory.")
        return

    if args.check_duplicates:
        duplicate_files = find_duplicate_files(args.directory)
        print_duplicate_files(duplicate_files)
    else:
        print("No operation specified. Use --check-duplicates to find duplicate files.")

if __name__ == "__main__":
    main()