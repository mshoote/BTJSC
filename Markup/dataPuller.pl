use strict;
use warnings;
use 5.012;

opendir(my $dir, "/root/") or die "Unable to open directory: $!";
open my $dh, '>', 'total.txt' or die "Failed to open $!\n";

while (my $fh = <$dir>) {
  next if $fh =~ /^pagingTime\(\d+\)\.txt|^pagingTime\.txt/; # Skip files matching pattern
  open my $ph, '<', $fh or warn "Could not open file '$fh': $!";
  
  # Write something to $fh.
  while (my $line = <$ph>){
	chomp $line;
	#the regex finder " /[0-9]+\,|[0-9]+\]/g "
	my @strings = $line =~ /([0-9]+)(?:\,|\])/g;
	foreach my $s (@strings){
		print $dh "$s ";
		}
	}
  close $ph;
}
closedir $dir;
close $dh;

	print "DONE\n";
	